import TrainingList from "./TrainingList";
import TrainingCard from "./TrainingCard";

const YourTraining = ({ graduates }) => {
    return (
        <>
            <div className="row">
                {graduates.map(graduate => {
                    return <><TrainingList key={graduate._id} trainingProp={graduate} /> <TrainingCard /></>
                })}

            </div >
        </>
    )
};

export default YourTraining;