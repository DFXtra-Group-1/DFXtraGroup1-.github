const ProfileList = ({ gradProps1 }) => {
    const { firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone } = gradProps1;
    return (

        <div className="col-sm-6">
            <div className="card m-2 border-white">
                <div className="card-body">
                    <h5 className="card-title"> Your Profile </h5>
                    <div className="ps-5 pt-3">
                        <p className="card-text">Name: {firstName} {lastName}</p>
                        <p className="card-text" >Personal Email: {personalEmail}</p>
                        <p className="card-text">Digital Futures Email: {digitalFuturesEmail}</p>
                        <p className="card-text">GitHub: {gitHub}</p>
                        <p className="card-text">LinkedIn: {linkedIn}</p>
                        <p className="card-text">Phone: {phone}</p>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default ProfileList;