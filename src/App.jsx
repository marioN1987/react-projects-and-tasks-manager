import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleCancel = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  const handleStartAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  const handleAddProject = (projectObj) => {

    const newProject = {
      id: crypto.randomUUID(),
      ...projectObj
    }

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  const handleSelectedProject = (projectId) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    });
  }

  const handleDeleteProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(item => item.id !== projectState.selectedProjectId)
      }
    })
  }

  const handleAddTask = (taskName) => {
    if (!taskName) {
      return;
    }

    setProjectState(prevState => {
      const temp = {
        taskName,
        projectId: projectState.selectedProjectId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, temp]
      }
    });

  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} addProject={handleAddProject}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }  else {
    content = <SelectedProject 
                project={selectedProject} 
                deleteProject={handleDeleteProject} 
                addedTask={handleAddTask} 
                tasks={projectState.tasks.filter(item => item.projectId === projectState.selectedProjectId)} 
              />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar 
          onStartAddProject={handleStartAddProject} 
          projectSelected={handleSelectedProject} 
          projects={projectState.projects} 
          selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
