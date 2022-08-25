import YourProfile from "./profileView/YourProfile";
import Info from './information/Info';
import YourTraining from "./profileView/YourTraining";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ViewProfilePage = ({ SERVER_URL }) => {

    const { uuid } = useParams();

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
                // console.log(res.data)
                setGraduate(res.data);
            })
    }

    useEffect(() => {
        getData()
    }, []);



    return (
        <>
            <div className="centered-div" id="view">
                <div className="mx-5 mt-5">
                    <div className="row border border-dark px-3 py-3" id="profile">
                        <YourProfile graduate={graduate} />
                    </div>
                </div>
                <div className="border border-dark px-3 py-3" id="training">
                    <YourTraining graduate={graduate} />
                </div>
                <div className="border border-dark px-3 py-3" id="info">
                    <Info graduate={graduate} />
                </div>
            </div>
        </>
    );
}

export default ViewProfilePage;