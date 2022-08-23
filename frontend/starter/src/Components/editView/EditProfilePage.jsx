import PersonalInformation from "./PersonalInformation";
import GraduateModel from "../utils/Graduate.model";

import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const EditProfilePage = ({ SERVER_URL }) => {

    const { uuid } = useParams()
    const [graduate, setGraduate] = useState({
        "_id": "",
        "uuid": "",
        "available": "",
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "gender": "",
        "nationality": "",
        "personality": "",
        "phone": "",
        "linkedIn": "",
        "gitHub": "",
        "personalEmail": "",
        "digitalFuturesEmail": "",
        "degrees": [{}],
        "schoolQualifications": [{}],
        "workExperience": [{}],
        "certificatesAndAwards": [{}],
        "portfolio": [{}],
        "personalSummary": "",
        "cohort": "",
        "learningPath": "",
        "trainer": "",
        "trainingFinishDate": ""
    });

    const _id = graduate._id;
    const uuid1 = graduate.uuid;
    const available = graduate.available;
    const dateOfBirth = graduate.dateOfBirth;
    const cohort = graduate.cohort;
    const learningPath = graduate.learningPath;
    const trainer = graduate.trainer;
    const trainingFinishDate = graduate.trainingFinishDate;

    const [firstName, setFirstName] = useState(graduate.firstName);
    const [lastName, setLastName] = useState(graduate.lastName);
    const [gender, setGender] = useState(graduate.gender);
    const [nationality, setNationality] = useState(graduate.nationality);
    const [personality, setPersonality] = useState(graduate.personality);
    const [phone, setPhone] = useState(graduate.phone);
    const [linkedIn, setLinkedIn] = useState(graduate.linkedIn);
    const [gitHub, setGitHub] = useState(graduate.gitHub);
    const [personalEmail, setPersonalEmail] = useState(graduate.personalEmail);
    const [digitalFuturesEmail, setDigitalFuturesEmail] = useState(graduate.digitalFuturesEmail);
    const [degrees, setDegrees] = useState(graduate.degrees);
    const [schoolQualifications, setSchoolQualifications] = useState(graduate.schoolQualifications);
    const [workExperience, setWorkExperience] = useState(graduate.workExperience);
    const [certificatesAndAwards, setCertificatesAndAwards] = useState(graduate.certificatesAndAwards);
    const [portfolio, setPortfolio] = useState(graduate.portfolio);
    const [personalSummary, setPersonalSummary] = useState(graduate.personalSummary);

    // const personalProps1 = {

    // }



    const getData = async () => {
        await axios.get(`${SERVER_URL}/graduate/${uuid}`)
            .then(res => {
                setGraduate(res.data)
            })
    }
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
            await axios.put(`${SERVER_URL}/${uuid}`, graduate)
        }
        catch (err) {
            alert(`Something went wrong: ${err.message}`)
        }
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <button className="btn" type="submit">Submit draft</button>
                <PersonalInformation graduate={graduate} setFirstName={setFirstName} setLastName={setLastName} setGender={setGender} setNationality={setNationality} setPersonality={setPersonality} setPhone={setPhone} setLinkedIn={setLinkedIn} setPersonalEmail={setPersonalEmail} setDigitalFuturesEmail={setDigitalFuturesEmail} setGitHub={setGitHub} />
            </form>
        </>
    )
};

export default EditProfilePage;