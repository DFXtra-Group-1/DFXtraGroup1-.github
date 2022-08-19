const Scores = ({ scoresProp }) => {
    const { award, grade } = scoresProp.certificatesAndAwards[0];
    return (
        <>
            <div className="row">
                <div className="col-2">
                    Score
                </div>
                <div className="col-6" >
                    <div className="form-floating mb-3 border border-4">
                        <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="ScoreExamples" name="scoresText" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <label htmlFor="floatingEmptyPlaintextInput">
                            {/* Award: 93%
                            Grade: 87% */}
                            {award}: {grade}
                        </label>
                    </div>
                </div>
                <div className="col-2">
                    Video Link
                </div>
            </div>
        </>
    );
}

export default Scores;