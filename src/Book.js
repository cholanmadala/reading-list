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

	const editHandlerBook = (name, flag) => {
		handleEdit(item.id, name);
		setEdit(flag);
	}

	const renderBook = (<div className='book'>
			<button onClick={editHandler}>Edit</button>
			<button onClick={deleteHandler}>Delete</button>
			<div>{item.fname} {item.lname}</div>
		</div>);

	return edit ? 
		<EditBook  
			handleSubmit={editHandlerBook}
			defaultValue={item}
		/> :
		renderBook;
};
export default Book;