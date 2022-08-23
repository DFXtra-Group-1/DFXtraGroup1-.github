import DropDowns from "./DropDowns";
import ProfileEdit from "./ProfileEdit";

const PersonalInformation = ({ graduate, setFirstName, setLastName, setDateOfBirth, setGender, setNationality, setPersonality, setPhone, setLinkedIn, setPersonalEmail, setDigitalFuturesEmail, setGitHub }) => {

    const gradProps1 = {
        _id: graduate._id,
        firstName: graduate.firstName,
        lastName: graduate.lastName,
        personalEmail: graduate.personalEmail,
        digitalFuturesEmail: graduate.digitalFuturesEmail,
        gitHub: graduate.gitHub,
        linkedIn: graduate.linkedIn,
        phone: graduate.phone
    }

    return (
        <div className="row">
            <h5 className="card-title"> Personal Information </h5>
            <ProfileEdit
                gradProps1={gradProps1} setFirstName={setFirstName} setLastName={setLastName} setDateOfBirth={setDateOfBirth} setPhone={setPhone} setLinkedIn={setLinkedIn} setPersonalEmail={setPersonalEmail} setDigitalFuturesEmail={setDigitalFuturesEmail} setGitHub={setGitHub}
            />
            <DropDowns
                setGender={setGender} setNationality={setNationality} setPersonality={setPersonality}
            />
        </div>
    )
};

export default PersonalInformation;