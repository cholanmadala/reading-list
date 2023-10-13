import Book from './Book';
import './BookList.css';

const BookList = ({list, handleDelete, handleEdit}) => {
    const deleteItem = (id) => {
        handleDelete(id);
    }

    const editItem = (id, name) => {
        handleEdit(id, name);
    }
    
    const renderBooks = () => list.map((item, index) => 
        <Book 
            handleDelete={deleteItem} 
            handleEdit={editItem}
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
export default BookList;