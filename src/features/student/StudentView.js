import { LABEL } from "../../app/constants";
import AppButton from "../../component/AppButton";
import AppFormInput from "../../component/AppFormInput";

const StudentView = props => {
    const {handleNameChange, handleSubmit, handleAddAgeClick, nameValue, student} = props;
    return(
        <>
            <div style={{margin:'30px'}}>
                <h2>Student</h2>
                <AppFormInput id='name' label={LABEL['Name.label'].value}   value={nameValue} onValueChange={handleNameChange}/>
                <AppButton handleClick={handleSubmit} label={LABEL['ChangeName.label'].value}/>
                <div>
                    <AppButton handleClick={handleAddAgeClick} label={LABEL['AddAge.label'].value}/>
                </div>
                <div>{student.name} {student.age}</div>
            </div>
        </>
    )
}

export default StudentView