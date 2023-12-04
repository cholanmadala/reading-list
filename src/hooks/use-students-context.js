import { useContext } from 'react';
import StudentContext from '../context/StudentContext';

function useStudentsContext() {
    return useContext(StudentContext);
}

export default useStudentsContext;