import PersonalInformation from "./personalInformation";

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
    const getData = async () => {
        await axios.get(`${SERVER_URL}/graduate/${uuid}`)
            .then(res => {
                setGraduate(res.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <PersonalInformation graduate={graduate} />

    )
};

export default EditProfilePage;