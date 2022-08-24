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
<<<<<<< HEAD
                        {/* <textarea class="form-control-plaintext" readonly id="exampleFormControlTextarea1" value={text} rows="3"></textarea> */}
                        <div className="form-control-plaintext" readOnly id="exampleFormControlTextarea1" rows="3">
                            <span> Module 1:</span>
                            <span> {moduleObj.Module1}</span>
                            <span> Module 2:</span>
                            <span> {moduleObj.Module2}</span>
                            <span> Module 3:</span>
                            <span> {moduleObj.Module3}</span>
                        </div>
=======
                        <textarea className="form-control-plaintext" readonly id="exampleFormControlTextarea1" value={text} rows="3"></textarea>
>>>>>>> fe33f50e3f11b9ddb3762bab45876fccc79bca7f
                    </div>
                </div>
            </div>
        </div >
    )
};

export default TrainingCard;