import TrainingList from "./TrainingList";
import TrainingCard from "./TrainingCard";

const YourTraining = ({ graduate }) => {
    return (
        <div className="row">
            <TrainingList key={graduate._id} trainingProp={graduate} /> <TrainingCard />

        </div>
    )
};

export default YourTraining;