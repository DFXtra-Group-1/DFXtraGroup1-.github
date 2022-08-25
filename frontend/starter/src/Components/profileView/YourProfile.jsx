import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";
import { NavLink } from "react-router-dom";

const YourProfile = ({ graduate }) => {

    const gradProps1 = {
        _id: graduate._id,
        firstName: graduate.firstName,
        lastName: graduate.lastName,
        personalEmail: graduate.personalEmail,
        digitalFuturesEmail: graduate.digitalFuturesEmail,
        gitHub: graduate.gitHub,
        linkedIn: graduate.linkedIn,
        phone: graduate.phone
    };

    const gradProps2 = {
        degrees: graduate.degrees,
        schoolQualifications: graduate.schoolQualifications,
        workExperience: graduate.workExperience,
        certificatesAndAwards: graduate.certificatesAndAwards,
        portfolio: graduate.portfolio
    };

    const editURL = `/graduate/${graduate.uuid}/edit`;

    return (
        <div className="row">
            <h5 className="card-title"> Your Profile </h5>
            <NavLink to={editURL}>
                <button className="btn">Edit</button>
            </NavLink>
            <ProfileList
                gradProps1={gradProps1}
            />
            <ProfileCard
                gradProps2={gradProps2} />
        </div>
    )

};

export default YourProfile;