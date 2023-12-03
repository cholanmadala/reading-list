import { useState, useContext } from "react";
import CreateStudent from "./components/CreateStudent";
import axios from "axios";
import Students from "./components/Students";
import StudentContext from "./context/StudentContext";

const App = () => {
    // get list and createStudent method from Context
    const {list, createStudent} = useContext(StudentContext);

    return (
        <>
            <Students list={list} />
            <CreateStudent onSubmit={createStudent} />
        </>
    )
};

export default App;