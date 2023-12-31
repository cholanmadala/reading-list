import { useState } from "react";
import './CreateStudent.css';
import useStudentsContext from "../hooks/use-students-context";

const CreateStudent = () => {
    const [student, setStudent] = useState({fname: '', lname: ''});
    const {createStudent} = useStudentsContext();

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
    }
    const inputHandlerFname = (ev) => {
        ev.stopPropagation();
        setStudent({...student, fname: ev.target.value});
    }
    const inputHandlerLname = (ev) => {
        ev.stopPropagation();
        setStudent({...student, lname: ev.target.value});
    }
    const submitForm = () => {
        if (Object.values(student).length) {
            createStudent(student);
            setStudent({fname: '', lname: ''});
        } else {
            console.error('form not submitted');
        }
    }
    return (
        <div className="book-create-container">
            <h2>Add a Student</h2>
            <form onSubmit={handleFormSubmit}>
                <div>First Name : <input name="fname" value={student.fname} onChange={inputHandlerFname} /> </div>
                <div>Last Name : <input name="lname" value={student.lname} onChange={inputHandlerLname} /> </div>
                {/* <input name="student-name" value={book} onChange={inputHandler} /> */}
                <div>
                    <button onClick={submitForm}>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default CreateStudent;