import { useEffect } from 'react';
import CreateStudent from "./components/CreateStudent";
import Students from "./components/Students";
import useStudentsContext from './hooks/use-students-context';

function Loading() {
    return <h2>Loading ..... </h2>;
}

const App = () => {

    const {getStudents} = useStudentsContext();
    useEffect(() => {
        getStudents();
    }, [getStudents]);

    return (
        <>
            <Students />
            <CreateStudent />
        </>
    )
};

export { Loading };
export default App;