import { useState } from "react";
import './EditBook.css';


const EditBook = ({handleSubmit, defaultValue}) => {
    const [student, setStudent] = useState(defaultValue);
    const inputHandlerFname = (ev) => {
        setStudent({...student, fname: ev.target.value});
    }
    const inputHandlerLname = (ev) => {
        setStudent({...student, lname: ev.target.value});
    }

    const handleFormSubmission = (ev) => {
        ev.preventDefault();
    }

    const submitHandler = () => {
        handleSubmit(student, false);
    }

    return (
        <div className="edit-book-container">
            Edit Book Here:::
            <form onSubmit={handleFormSubmission}>
                Name: 
                <div>
                    <input name='fname' value={student.fname} onChange={inputHandlerFname} />
                </div>
                <div>
                    <input name='lname' value={student.lname} onChange={inputHandlerLname} />
                </div>
                <div>
                    <button onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditBook;