const TrainingCard = () => {

    const moduleObj = {
        Module1: "Passed",
        Module2: "Passed",
        Module3: "Failed",
    }

    return (
        <div className="col-sm-6">
            <div className="card border-white mx-2 my-5">
                <div className="border border-dark w-100 px-4 pt-3 mt-5" readOnly>
                    <p><span> Module 1:</span>
                        <span> {moduleObj.Module1}</span></p>
                    <p> <span> Module 2:</span>
                        <span> {moduleObj.Module2}</span></p>
                    <p> <span> Module 3:</span>
                        <span> {moduleObj.Module3}</span></p>
                </div>
            </div>
        </div>
    )
};

export default TrainingCard;