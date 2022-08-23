import DropDowns from "./DropDowns";
import ProfileList from "../profileView/ProfileList";

const PersonalInformation = ({ graduate }) => {

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
            <ProfileList
                gradProps1={gradProps1}
            />
            <DropDowns />
        </div>
    )

};

export default PersonalInformation;