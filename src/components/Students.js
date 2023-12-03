import Student from './Student';
import './Students.css';

const Students = ({list}) => {
    
    const renderBooks = () => list.map((item, index) => 
        <Student
            key={`${item}.${index}`} 
            item={item} 
        />
    );

    return (
        <div className="book-list-container">
            {renderBooks()}
        </div>
    )
};
export default Students;