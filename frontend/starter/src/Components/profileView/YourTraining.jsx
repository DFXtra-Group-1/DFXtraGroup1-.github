const YourTraining = TrainingProps => {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mx-2 my-5">
                        <div className="card-body">
                            <h5 className="card-title"> Your Training </h5>
                            <div className="ps-5">
                                <p className="card-text">Cohort:</p>
                                <p className="card-text" >Learning Path:</p>
                                <p className="card-text">Trainer:</p>
                                <p className="card-text">Training finish date:</p>
                                <p className="card-text">LinkedIn:</p>
                                <p className="card-text">Phone:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mx-2 my-5">
                        <div className="card-body" >
                            {/* <h5 className="card-title">Personal Story Summary</h5> */}
                            < div class="form-group" >
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};

export default YourTraining;