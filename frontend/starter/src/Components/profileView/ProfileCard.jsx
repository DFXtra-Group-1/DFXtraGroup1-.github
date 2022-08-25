const ProfileCard = ({ gradProps2 }) => {
    const { degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio } = gradProps2;
    // console.log(schoolQualifications);
    return (
        <div className="card m-2 border-white">
            <div className="card-body w-100">
                <h5 className="card-title py-2">Personal Story Summary</h5>
                <div className="border border-dark w-100 px-4 pt-3">
                    <p>Degree in {degrees[0].degreeSubject} from {degrees[0].toDate}</p>
                    <p>{schoolQualifications.length} school qualifications</p>
                    <p>{workExperience.length} work experiences</p>
                    <p>{certificatesAndAwards.length} personal achievements</p>
                    <p>{portfolio.length} projects in portfolio</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;