import Badges from "./Badges";
import Scores from "./Scores";
const Info = ({ graduate }) => {
    return (
        <>
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4"> */}
            <div className="ps-3 pt-1 pb-5">
                <h5>Your Information</h5>
            </div>

            {/* </div> */}
            <div className="row">
                <div className="col ps-5 ms-3"><Badges /></div>
                <div className="col pb-5"><Scores scoresProp={graduate} key={graduate._id} /></div>
            </div>
        </>





    );
}

export default Info;
