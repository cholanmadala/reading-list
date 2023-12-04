import { useState } from 'react';
import './Student.css';
import EditStudent from './EditStudent';
import useStudentsContext from '../hooks/use-students-context';

const Student = ({item}) => {
	const [edit, setEdit] = useState(false);
	const {deleteStudent, updateStudent} = useStudentsContext();

	const deleteHandler = () => {
		deleteStudent(item.id);
	};

	const editHandler = (name) => {
		// context 
		setEdit(true);
	};

	const editStudent = async (name, flag) => {
		const didUpdateHappen = await updateStudent(item.id, name);
		if (didUpdateHappen) {
			setEdit(flag);
		}
	}

	const renderBook = (<div className='book'>
			<button onClick={editHandler}>Edit</button>
			<button onClick={deleteHandler}>Delete</button>
			<div>{item.fname} {item.lname}</div>
		</div>);

	return edit ? 
		<EditStudent  
			handleSubmit={editStudent}
			defaultValue={item}
		/> :
		renderBook;
};
export default Student;