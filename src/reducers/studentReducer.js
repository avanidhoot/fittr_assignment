const studentReducer = (state = [],action) => {
let stateCopy
switch(action.type){

case 'ADD_STUDENT':
    stateCopy = [...state,action.payload];
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy

    
case 'UPDATE_STUDENT':
    stateCopy = state.map((student) => {
        const {id,name,schoolname,grade,division} = action.payload;
        if(student.id === id)
        {
            student.name = name;
            student.schoolname = schoolname;
            student.grade = grade;
            student.division = division;
        }
        return student;
    })
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy

default:
    return state;
}

}
export default studentReducer;