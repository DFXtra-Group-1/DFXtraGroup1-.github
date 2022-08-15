import Badges from "./Badges";
import Scores from "./Scores";

const Info = () => {
    return (
        <>
            <div className="container text-start border border-4">
                <div className="row row-cols-6">
                    <div className="col">
                        Your Information
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badges />
                        </div>
                        <div className="col-6">
                            <Scores />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;
