import ProfileList from "./ProfileList";
// import ProfileCard from "./ProfileCard";

const YourProfile = ({ graduates }) => {

    return (

        <div className="row">
            {graduates.map(grad => {
                const { _id, firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone } = grad;
                const gradProps1 = {
                    firstName,
                    lastName,
                    personalEmail,
                    digitalFuturesEmail,
                    gitHub,
                    linkedIn,
                    phone
                }
                return (
                    <ProfileList
                        key={_id}
                        gradProps1={gradProps1}
                    />
                )
            })}
        </div >

    )
};

export default YourProfile;