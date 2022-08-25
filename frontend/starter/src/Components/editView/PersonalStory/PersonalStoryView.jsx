import CertificatesAndAwards from "./CertificatesAndAwards";
import Degree from "./Degree";
import Portfolio from "./Portfolio";
import SchoolQualifications from "./SchoolQualifications";
import WorkExperience from "./WorkExperience";

const PersonalStoryView = ({ storyProps }) => {

    const { degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio } = storyProps;

    return (
        <div className="border border-dark">
            <div className="ps-3 py-3">
                <h5>Personal Story</h5>
            </div>
            <div className="px-3 pt-3">
                <table className="table">
                    <Degree degrees={degrees} />
                    <SchoolQualifications schoolQualifications={schoolQualifications} />
                    <WorkExperience workExperience={workExperience} />
                    <CertificatesAndAwards certificatesAndAwards={certificatesAndAwards} />
                    <Portfolio portfolio={portfolio} />
                </table>
            </div>
        </div>
    )
}

export default PersonalStoryView;

