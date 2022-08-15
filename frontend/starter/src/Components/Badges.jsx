
const Badges = () => {

    return (
        <>
            <div className="row ">
                <div className="col-4 ">Badges</div>
                <div className="col-4">
                    <div className="form-floating mb-3 border border-4">
                        <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge1example" name="Badge1" />
                        <label htmlFor="floatingEmptyPlaintextInput">Badges 1</label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-floating mb-3 border border-4">
                        <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge2example" name="Badge2" />
                        <label htmlFor="floatingEmptyPlaintextInput">Badges 2</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div className="form-floating mb-3 border border-4">
                        <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge3example" name="Badge3" />
                        <label htmlFor="floatingEmptyPlaintextInput">Badges 3</label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-floating mb-3 border border-4">
                        <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge4example" name="Badge4" />
                        <label htmlFor="floatingEmptyPlaintextInput">Badges 4</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Badges;
