import { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import axios from 'axios'; 

import PersonalStoryView from "./PersonalStory/PersonalStoryView"

const EditProfilePage = ( { SERVER_URL } ) => {

    const { uuid } = useParams();

    const [personalStory, setPersonalStory] = useState({
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

        await axios.get(`${SERVER_URL}/graduate/${uuid}/`)
            .then(res => {
                console.log(res.data)
                setPersonalStory(res.data);
            })
    }

    useEffect(() => {
        getData()
    }, []);


    return(
        <PersonalStoryView personalStory={personalStory} />
    )
}
export default EditProfilePage; 