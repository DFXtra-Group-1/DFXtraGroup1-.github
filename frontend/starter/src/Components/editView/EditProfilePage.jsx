import PersonalInformation from "./PersonalInformation";
import GraduateModel from "../utils/Graduate.model";

import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProfilePage = ({ SERVER_URL }) => {

    const { uuid } = useParams()

    let _id = ``;
    let uuid1 = ``;
    let available = ``;
    let dateOfBirth = ``;
    let cohort = ``;
    let learningPath = ``;
    let trainer = ``;
    let trainingFinishDate = ``;

    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [gender, setGender] = useState(``);
    const [nationality, setNationality] = useState(``);
    const [personality, setPersonality] = useState(``);
    const [phone, setPhone] = useState(``);
    const [linkedIn, setLinkedIn] = useState(``);
    const [gitHub, setGitHub] = useState(``);
    const [personalEmail, setPersonalEmail] = useState(``);
    const [digitalFuturesEmail, setDigitalFuturesEmail] = useState(``);
    const [degrees, setDegrees] = useState([{}]);
    const [schoolQualifications, setSchoolQualifications] = useState([{}]);
    const [workExperience, setWorkExperience] = useState([{}]);
    const [certificatesAndAwards, setCertificatesAndAwards] = useState([{}]);
    const [portfolio, setPortfolio] = useState([{}]);
    const [personalSummary, setPersonalSummary] = useState(``);

    const gradProps = {
        firstName,
        lastName,
        personalEmail,
        digitalFuturesEmail,
        gitHub,
        linkedIn,
        phone,
        gender,
        nationality,
        personality
    };

    const setProps = {
        setFirstName,
        setLastName,
        setPersonalEmail,
        setDigitalFuturesEmail,
        setGitHub,
        setLinkedIn,
        setPhone,
        setGender,
        setNationality,
        setPersonality
    };

    const getData = async () => {
        await axios.get(`${SERVER_URL}/graduate/${uuid}`)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setPersonalEmail(res.data.personalEmail);
                setDigitalFuturesEmail(res.data.digitalFuturesEmail);
                setGitHub(res.data.gitHub);
                setLinkedIn(res.data.linkedIn);
                setPhone(res.data.phone);
                setGender(res.data.gender);
                setNationality(res.data.nationality);
                setPersonality(res.data.personality);
                setDegrees(res.data.degrees);
                setSchoolQualifications(res.data.schoolQualifications);
                setWorkExperience(res.data.workExperience);
                setCertificatesAndAwards(res.data.certificatesAndAwards);
                setPortfolio(res.data.portfolio);
                setPersonalSummary(res.data.personalSummary);
                _id = res.data._id;
                uuid1 = res.data.uuid;
                available = res.data.available;
                dateOfBirth = res.data.dateOfBirth;
                cohort = res.data.cohort;
                learningPath = res.data.learningPath;
                trainer = res.data.trainer;
                trainingFinishDate = res.data.trainingFinishDate;
            })
    };
    useEffect(() => {
        getData()
    }, []);

    const submitHandler = e => {
        e.preventDefault();
        const graduateUpdated = new GraduateModel(_id, uuid1, available, firstName, lastName, dateOfBirth, gender, nationality, personality, phone, linkedIn, gitHub, personalEmail, digitalFuturesEmail, degrees, schoolQualifications, workExperience, certificatesAndAwards, portfolio, personalSummary, cohort, learningPath, trainer, trainingFinishDate)

        putGraduate(graduateUpdated)
    };

    const putGraduate = async graduate => {
        try {
            await axios.put(`${SERVER_URL}/graduate/${uuid}`, graduate)
        }
        catch (err) {
            alert(`Something went wrong: ${err.message}`)
        }
    };
    const resetHandler = () => getData();
    return (
        <>
            <div className="mx-5 mt-5">
                <form onSubmit={submitHandler}>
                    <div className="row border border-dark mx-1 py-3">
                        <div className="col"><h5>Your Profile</h5></div>
                        <div className="col-3">
                            <button className="btn me-3" type="submit" id="submit">Submit Draft</button>
                            <button className="btn" id="reset" onClick={resetHandler}>Reset Draft</button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <PersonalInformation gradProps={gradProps} setProps={setProps} />
                    </div>
                </form>
            </div>
        </>
    )
};

export default EditProfilePage;