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
        <div>
            <div className="row">
                <h5 className="card-title col pt-2"> Your Profile </h5>
                <div className="col-10 pb-1">
                    <NavLink to={editURL}>
                        <button className="btn" id="edit">Edit</button>
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ProfileList gradProps1={gradProps1} />
                </div>
                <div className="col">
                    <ProfileCard gradProps2={gradProps2} />
                </div>
            </div>
        </div>
    )

};

export default YourProfile;