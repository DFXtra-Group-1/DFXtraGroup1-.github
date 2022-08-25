
const Scores = ({ scoresProp }) => {
    // const { award, grade } = scoresProp.certificatesAndAwards[{
    //     award: "",
    //     grade: "",
    // }];
    return (

        <>
            <div className="row">
                <div className="col col-lg-2 col-md-3 col-sm-1 ">
                    Scores
                </div>
                <div className="col col-lg-6 col-md-7 col-sm-6 border border-4">
                    {scoresProp.certificatesAndAwards[0].award} : {scoresProp.certificatesAndAwards[0].grade}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>


            </div>
        </>
    );

}

export default Scores;