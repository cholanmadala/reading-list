import axios from "axios";
import { createContext, useState, useEffect } from "react";

const StudentContext = createContext();

const Provider = ({children}) => {

    const [list, setList] = useState([]);
    
    // on initial render, load all students data
    useEffect(() => {
        getStudents();
    }, []);

    // get students
    const getStudents = async () => {
        // Send a GET request
        axios({
            method: 'get',
            url: 'http://localhost:3001/students'
        }).then(function (response) {
            setList(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    // create student
    const createStudent = async (newStudent) => {
        const newStudentDetails = {
            id: list.length + 1,
            fname: newStudent.fname,
            lname: newStudent.lname
        };
        // Send a POST request
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/students',
            data: newStudentDetails
        }).then(function (response) {
            setList([
                ...list,
                response.data
            ]);
        }).catch(function (error) {
            console.error(error);
        });
    }

    // delete student
    const deleteStudent = async (itemId) => {
        const newList = list.filter(item => item.id !== itemId);
        // Send a DELETE request
        const response = await axios({
            method: 'delete',
            url: `http://localhost:3001/students/${itemId}`
        }).then(function (response) {
            setList(newList);
        }).catch(function (error) {
            console.error(error);
        });
    };

    // edit student
    const updateStudent = async (itemId, newName) => {
        let studentUpdated = false;
        const updatedList = list.map((i) => {
            if (i.id === itemId) {
                return { ...i, fname: newName.fname, lname: newName.lname }
            }
            return i;
        });

        // Send a PUT request
        const response = await axios({
            method: 'put',
            url: `http://localhost:3001/students/${itemId}`,
            data: { fname: newName.fname, lname: newName.lname }
        }).then(function (response) {
            setList(updatedList);
            studentUpdated = true;
        }).catch(function (error) {
            console.error(error);
        });
    
        return studentUpdated;
    };

    const studentContext = {
        list,
        createStudent,
        updateStudent,
        deleteStudent
    }

    return <StudentContext.Provider value={studentContext}>{children}</StudentContext.Provider>
}


export {Provider};
export default StudentContext;