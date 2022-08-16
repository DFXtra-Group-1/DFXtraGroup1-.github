import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";

const YourProfile = ({ graduates }) => {

    return (


        graduates.map(grad => {
            const { uuid, _id, firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone, degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio } = grad;

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
                certificatesAndAwards,
                portfolio
            }

            return (
                <div className="row">
                    <ProfileList
                        key={_id}
                        gradProps1={gradProps1}
                    />
                    <ProfileCard
                        key={uuid}
                        gradProps2={gradProps2} />
                </div >
            )
        })
        // </div >

    )
};

export default YourProfile;