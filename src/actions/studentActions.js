export function addStudent(student)
{
    return {
    type:'ADD_STUDENT',
    payload:student
    }
}


export function updateStudent(student)
{
    return {
        type:'UPDATE_STUDENT',
        payload:student
        }

}