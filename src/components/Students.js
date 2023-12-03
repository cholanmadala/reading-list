import Student from './Student';
import './Students.css';
import { useContext } from 'react';
import StudentContext from '../context/StudentContext';



const Students = () => {
 
    const {list} = useContext(StudentContext);

    const renderBooks = () => list.map((student, index) => 
        <Student
            key={`${student}.${index}`} 
            item={student}
        />
    );

    return (
        <div className="book-list-container">
            {renderBooks()}
        </div>
    )
};
export default Students;