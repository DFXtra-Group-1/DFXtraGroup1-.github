import CertificatesAndAwards from "./CertificatesAndAwards";
import Degree from "./Degree";
import Portfolio from "./Portfolio";
import SchoolQualifications from "./SchoolQualifications";
import WorkExperience from "./WorkExperience";

const PersonalStoryView = ({ storyProps, setStoryProps }) => {
    
    // const addRows = (degrees) => { 
    //   const totalDegree = degrees.length;
    //   degrees.university = totalDegree + 1;
    //     const updatedTotalDegree = [...degrees];
    //     updatedTotalDegree.push(degrees);
    //     setDegrees(updatedTotalDegree);
    //  }
    
    return (
        <>
            <Degree degrees={storyProps.degrees} />
            {/* <SchoolQualifications schoolQualifications={storyProps.schoolQualifications} setSchoolQualifications={setStoryProps.setSchoolQualifications} />
        <WorkExperience workExperience = {storyProps.workExperience} setWorkExperience={setStoryProps.setWorkExperience}/>
        <CertificatesAndAwards certificatesAndAwards = {storyProps.certificatesAndAwards} setCertificatesAndAwards={setStoryProps.setCertificatesAndAwards}/>
        <Portfolio portfolio = {storyProps.portfolio} setPortfolio={setStoryProps.setPortfolio}/> */}
        </>
    )
}

export default PersonalStoryView; 

