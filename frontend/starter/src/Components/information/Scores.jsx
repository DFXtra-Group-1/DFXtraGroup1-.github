
const Scores = ({ scoresProp }) => {
    return (

        <>
            <div className="row">
                <div className="col">
                    <p>Scores:</p>
                </div>
                <div className="col-10">
                    <div className="border border-dark me-3">
                        <p className="px-3 py-3">
                            {scoresProp.certificatesAndAwards[0].award} : {scoresProp.certificatesAndAwards[0].grade}
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Scores;