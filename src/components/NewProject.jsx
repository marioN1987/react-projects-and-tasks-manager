import { useImperativeHandle, useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

export default function NewProject({onCancel, addProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    
    const dialog = useRef();

    const handleSave = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title === '' || description === '' || dueDate === '') {
            dialog.current.open();
        } else {
            addProject({title, description, dueDate});
        }

    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <Button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                        Cancel
                    </Button>
                </li>
                <li>
                    <Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
                        Save
                    </Button>
                </li>
            </menu>
            <form className="mt-4 text-left">
                <Input label="title" ref={titleRef} />
                <Input label="description" ref={descriptionRef} textarea />
                <Input label="due date" ref={dueDateRef} type="date" />
            </form>
            <Modal 
                ref={dialog} 
                buttonCaption="Okay"
            >
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
                <p className="text-stone-400 mb-4">Oops looks like you forgot to add input</p>
            </Modal>
        </div>
    )
}