import TrainingList from "./TrainingList";
// import TrainingCard from "./TrainingCard";

const YourTraining = ({ graduates }) => {
    return (
        <>
            <div className="row">
                {graduates.map(graduate => {
                    const { _id, cohort, learningPath, trainer, trainingFinishDate } = graduate;

                    const graduateProp1 = {
                        cohort,
                        learningPath,
                        trainer,
                        trainingFinishDate

                    }
                    return <TrainingList key={_id} trainingProp={graduateProp1} />
                })}

            </div >
        </>
    )
};

export default YourTraining;