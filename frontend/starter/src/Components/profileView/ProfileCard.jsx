const ProfileCard = ({ gradProps2 }) => {
    const { degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio } = gradProps2;

    return (

        <div className="col-sm-6">
            <div className="card m-2 border-white">
                <div className="card-body">
                    <h5 className="card-title">Personal Story Summary</h5>
                    <div className="form-group">
                        <div className="form-control" id="exampleFormControlTextarea1" rows="3">
                            <p>Degree in {degrees[0].degreeSubject} from {degrees[0].toDate}</p>
                            <p>{schoolQualifications.length} school qualifications</p>
                            <p>{workExperience.length} work experiences</p>
                            <p>{certificatesAndAwards.length} personal achievements</p>
                            <p>{portfolio.length} projects in portfolio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default ProfileCard;