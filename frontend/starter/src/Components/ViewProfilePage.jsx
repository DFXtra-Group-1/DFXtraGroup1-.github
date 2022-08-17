import YourProfile from "./profileView/YourProfile";
// import YourTraining from "./profileView/YourTraining";
import axios from 'axios';
import { useState, useEffect } from "react";


const ViewProfilePage = ( { SERVER_URL } ) => {

    const [graduate, setGraduate] = useState(); 

    const getData = async () => {

        await axios.get(`${SERVER_URL}/graduate/`)
            .then( res => {
                setGraduate( res.data );
            })
    }

    getData();

    // useEffect ( () => {

    //      getData();

    // }, [])

    

    return (
        <>
            <YourProfile graduates={ graduate }/>
            {/* <YourTraining graduates={ graduate }/> */}
            {/* <Info/> */}
        </>
    );
}

export default ViewProfilePage;