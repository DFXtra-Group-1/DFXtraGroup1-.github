const Badges = () => {

    return (

        <>
            <div className="row">
                <div className="col-sm col col-lg-2">
                    Badges:
                </div>
                <div className="col-sm col col-lg-4">
                    <div>
                        <div className="form-floating mb-3 border border-dark">
                            <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge1example" name="Badge1" />
                            <label htmlFor="floatingEmptyPlaintextInput">Badges 1</label>
                        </div>
                        <div className="form-floating mb-3 border border-dark">
                            <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge1example" name="Badge2" />
                            <label htmlFor="floatingEmptyPlaintextInput">Badges 2</label>
                        </div>
                    </div>
                </div>
                <div className="col-sm col col-lg-4">
                    <div>
                        <div className="form-floating mb-3 border border-dark">
                            <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge1example" name="Badge3" />
                            <label htmlFor="floatingEmptyPlaintextInput">Badges 3</label>
                        </div>
                        <div className="form-floating mb-3 border border-dark">
                            <input type="text" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Badge1example" name="Badge4" />
                            <label htmlFor="floatingEmptyPlaintextInput">Badges 4</label>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Badges;
