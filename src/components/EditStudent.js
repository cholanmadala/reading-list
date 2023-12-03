import { useState } from "react";
import './EditStudent.css';


const EditStudent = ({handleSubmit, defaultValue}) => {
    const [student, setStudent] = useState(defaultValue);
    const inputHandlerFname = (ev) => {
        ev.stopPropagation();
        setStudent({...student, fname: ev.target.value});
    }
    const inputHandlerLname = (ev) => {
        ev.stopPropagation();
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

export default EditStudent;