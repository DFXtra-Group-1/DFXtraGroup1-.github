import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";

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
    }

    const gradProps2 = {
        degrees: graduate.degrees,
        schoolQualifications: graduate.schoolQualifications,
        workExperience: graduate.workExperience,
        certificatesAndAwards: graduate.certificatesAndAwards,
        portfolio: graduate.portfolio
    }
    // console.log(graduate);


    return (
        <div className="row">
            <h5 className="card-title"> Your Profile </h5>
            <ProfileList
                gradProps1={gradProps1}
            />
            <ProfileCard
                gradProps2={gradProps2} />
        </div >
    )

};

export default YourProfile;