import CertificatesAndAwards from "./CertificatesAndAwards";
import Degree from "./Degree";
import Portfolio from "./Portfolio";
import SchoolQualifications from "./SchoolQualifications";
import WorkExperience from "./WorkExperience";

const PersonalStoryView = ({personalStory}) => {
    
    return (
        <>
        <Degree degrees = {personalStory.degrees} />
        <SchoolQualifications schoolQualifications = {personalStory.schoolQualifications} />
        <WorkExperience workExperience = {personalStory.workExperience} />
        <CertificatesAndAwards certificatesAndAwards = {personalStory.certificatesAndAwards} />
        <Portfolio portfolio = {personalStory.portfolio} />
        </>
    )
}

export default PersonalStoryView; 

