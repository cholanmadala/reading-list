import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {
    const [list, setList] = useState([]);

    const formSubmission = (newStudent) => {
        setList([...list, {id: (list.length + 1), fname: newStudent.fname, lname: newStudent.lname}]);
    }

    const deleteItem = (itemId) => {
        const newList = list.filter(item => item.id !== itemId);
        setList(newList);
    };
        
    const editItem = (itemId, newName) => {
        const updatedList = list.map((i) => {
            if (i.id === itemId) {
                return {...i, fname: newName.fname, lname: newName.lname}
            }
            return i;
        });
        setList(updatedList);
    };

    return (
        <>
        <BookList list={list} handleDelete={deleteItem} handleEdit={editItem} />
        <BookCreate formSubmission={formSubmission} />
        </>
    )
};

export default App;