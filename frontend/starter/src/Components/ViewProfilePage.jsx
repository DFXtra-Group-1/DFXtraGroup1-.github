import YourProfile from "./profileView/YourProfile";
import Info from './information/Info';
import YourTraining from "./profileView/YourTraining";
import axios from 'axios';
import { useState, useEffect } from "react";


const ViewProfilePage = ({ SERVER_URL }) => {

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

        await axios.get(`${SERVER_URL}/graduate/2`)
            .then(res => {
                console.log(res.data)
                setGraduate(res.data);
            })
    }

    useEffect(() => {
        getData()
    }, []);



    return (
        <>
            <YourProfile graduate={graduate} />
            {/* <YourTraining graduate={graduate} /> */}
            {/* {console.log(graduate)} */}
            <Info graduate={graduate} />
        </>
    );
}

export default ViewProfilePage;