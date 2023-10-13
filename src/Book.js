import { useState } from 'react';
import './Book.css';
import EditBook from './EditBook';

const Book = ({item, handleDelete, handleEdit}) => {
	const [edit, setEdit] = useState(false);
	
	const deleteHandler = () => {
		handleDelete(item.id);
	};

	const editHandler = (name) => {
		setEdit(true);
	};

	const editHandlerBook = (name) => {
		handleEdit(item.id, name);
	}

	const editSubmitHandler = (flag) => {
		setEdit(flag);
	}
	const renderBook = (<div className='book'>
			<button onClick={editHandler}>Edit</button>
			<button onClick={deleteHandler}>Delete</button>
			<div>{item.fname} {item.lname}</div>
		</div>);

	return edit ? 
		<EditBook  
			handleEdit={editHandlerBook}
			handleSubmit={editSubmitHandler}
			defaultValue={item}
		/> :
		renderBook;
};
export default Book;