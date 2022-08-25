import Badges from "./Badges";
import Scores from "./Scores";
const Info = ({ graduate }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col col-lg-6 col-md-6 col-sm-6">Your Information</div>

            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col col-lg-6 col-md-6 col-sm-6"><Badges /></div>
                <div className="col col-lg-6 col-md-6 col-sm-6"><Scores scoresProp={graduate} key={graduate._id} /></div>
            </div>
        </>





    );
}

export default Info;
