import CertificatesAndAwards from "./CertificatesAndAwards";
import Degree from "./Degree";
import Portfolio from "./Portfolio";
import SchoolQualifications from "./SchoolQualifications";
import WorkExperience from "./WorkExperience";

const PersonalStoryView = ({ storyProps }) => {

    const { degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio } = storyProps;
    
    return (
        <table className="table">
            <Degree degrees={degrees} />
            <SchoolQualifications schoolQualifications={schoolQualifications} />
            <WorkExperience workExperience={workExperience} />
            <CertificatesAndAwards certificatesAndAwards={certificatesAndAwards} />
            <Portfolio portfolio={portfolio} />
        </table>
    )
}

export default PersonalStoryView; 

