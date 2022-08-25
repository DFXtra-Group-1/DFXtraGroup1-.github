const TrainingCard = () => {

    //const text = 'Module 1: Passed, Module 2: Passed, Module 3: Failed';

    const moduleObj = {
        Module1: "Passed",
        Module2: "Passed",
        Module3: "Failed",
    }

    return (
        <div className="col-sm-6">
            <div className="card mx-2 my-5">
                <div className="card-body" >
                    <div className="form-group">
                        {/* <textarea class="form-control-plaintext" readonly id="exampleFormControlTextarea1" value={text} rows="3"></textarea> */}
                        <div className="form-control-plaintext" readOnly id="exampleFormControlTextarea1" rows="3">
                            <p><span> Module 1:</span>
                                <span> {moduleObj.Module1}</span></p>
                            <p> <span> Module 2:</span>
                                <span> {moduleObj.Module2}</span></p>
                            <p> <span> Module 3:</span>
                                <span> {moduleObj.Module3}</span></p>
                        </div>
                        {/* <textarea className="form-control-plaintext" readonly id="exampleFormControlTextarea1" value={text} rows="3"></textarea> */}
                    </div>
                </div>
            </div>
        </div >
    )
};

export default TrainingCard;