const ProfileCard = ({ gradProps2 }) => {
    const { degrees, schoolQualifications, workExperience, certificationsAndAwards, portfolio } = gradProps2;
    return (

        <div className="col-sm-6">
            <div className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">Personal Story Summary</h5>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                            Degree in {degrees.degreeSubject} from {degrees.toDate}
                            {/* {schoolQualifications.length} school qualifications
                            {workExperience.length} work experiences
                            ( {certificationsAndAwards.length} + {portfolio.length}) personal achievements */}
                        </textarea>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default ProfileCard;