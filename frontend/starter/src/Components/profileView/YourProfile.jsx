import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";

const YourProfile = ({ graduates }) => {

    return (

        <div className="row">
            {graduates.map(grad => {
                const { uuid, _id, firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone, degrees, schoolQualifications, workExperience, certificationsAndAwards, portfolio } = grad;

                const gradProps1 = {
                    firstName,
                    lastName,
                    personalEmail,
                    digitalFuturesEmail,
                    gitHub,
                    linkedIn,
                    phone
                }

                const gradProps2 = {
                    degrees,
                    schoolQualifications,
                    workExperience,
                    certificationsAndAwards,
                    portfolio
                }

                return (
                    <>
                        <ProfileList
                            key={_id}
                            gradProps1={gradProps1}
                        />
                        <ProfileCard
                            key={uuid}
                            gradProps2={gradProps2} />
                    </>
                )
            })}
        </div >

    )
};

export default YourProfile;