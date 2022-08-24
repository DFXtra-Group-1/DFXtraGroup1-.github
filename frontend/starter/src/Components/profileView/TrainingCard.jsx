const TrainingCard = () => {

    const text = 'Module 1: Passed, Module 2: Passed, Module 3: Failed';

    return (
        <div className="col-sm-6">
            <div className="card mx-2 my-5">
                <div className="card-body" >
                    <div className="form-group">
                        <textarea className="form-control-plaintext" readonly id="exampleFormControlTextarea1" value={text} rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TrainingCard;