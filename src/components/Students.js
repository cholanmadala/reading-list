import Student from './Student';
import './Students.css';
import useStudentsContext from '../hooks/use-students-context';

const Students = () => {
 
    const {list} = useStudentsContext();

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