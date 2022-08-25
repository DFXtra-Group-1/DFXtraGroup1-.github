const TrainingList = ({ trainingProp }) => {
    const { cohort, learningPath, trainer, trainingFinishDate } = trainingProp;

    return (

        <div className="col-sm-6">
            <div className="card mx-1  border-white">
                <div className="card-body">
                    <h5 className="card-title mt-1"> Your Training </h5>
                    <div className="ps-5 mt-5 ms-4">
                        <p className="card-text">Cohort: {cohort}</p>
                        <p className="card-text" >Learning Path: {learningPath}</p>
                        <p className="card-text">Trainer: {trainer}</p>
                        <p className="card-text">Training finish date: {trainingFinishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TrainingList;