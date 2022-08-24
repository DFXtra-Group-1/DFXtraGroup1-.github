import DropDowns from "./DropDowns";
import ProfileEdit from "./ProfileEdit";

const PersonalInformation = ({ gradProps, setProps }) => {

    const { firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone, gender, nationality, personality } = gradProps;

    const { setFirstName, setLastName, setPersonalEmail, setDigitalFuturesEmail, setGitHub, setLinkedIn, setPhone, setGender, setNationality, setPersonality } = setProps;

    const gradProps1 = {
        firstName,
        lastName,
        personalEmail,
        digitalFuturesEmail,
        gitHub,
        linkedIn,
        phone
    };

    const gradProps2 = {
        gender,
        nationality,
        personality
    };

    const setProps1 = {
        setFirstName,
        setLastName,
        setPersonalEmail,
        setDigitalFuturesEmail,
        setGitHub,
        setLinkedIn,
        setPhone
    };

    const setProps2 = {
        setGender,
        setNationality,
        setPersonality
    };

    return (
        <div className="border border-dark px-3 py-3">
            <h5 className="card-title"> Personal Information </h5>
            {/* <div className="row"> */}
            <div id="info">
                <div id="personal">
                    <ProfileEdit
                        gradProps1={gradProps1} setProps1={setProps1}
                    />
                </div>

                <div id="dropdowns" className="pt-5 mt-5">
                    {/* <div className="col pt-5 mt-5" > */}
                    <DropDowns
                        gradProps2={gradProps2} setProps2={setProps2}
                    />
                </div>
            </div>
        </div>
        // </div>
    )
};

export default PersonalInformation;