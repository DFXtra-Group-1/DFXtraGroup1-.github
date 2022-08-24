const ProfileEdit = ({ gradProps1, setProps1 }) => {

    const { firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone } = gradProps1;

    const { setFirstName, setLastName, setPersonalEmail, setDigitalFuturesEmail, setGitHub, setLinkedIn, setPhone } = setProps1;

    return (
        <div className="col-sm-6">
            <div className="card m-2 border-white">
                <div className="card-body">
                    <div className="ps-5 pt-3">
                        <div className="row">
                            <label className="col" htmlFor="firstName">First name:&nbsp;</label>
                            <input className="form-control col" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="lastName">Last name:&nbsp;</label>
                            <input className="form-control col" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="email">Personal email:&nbsp;</label>
                            <input className="form-control col" value={personalEmail} onChange={e => setPersonalEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="digitalFuturesEmail">Digital Futures Email:&nbsp;</label>
                            <input className="form-control col" value={digitalFuturesEmail} onChange={e => setDigitalFuturesEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="gitHub">Github:&nbsp;</label>
                            <input className="form-control col" value={gitHub} onChange={e => setGitHub(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="linkedin">Linkedin:&nbsp;</label>
                            <input className="form-control col" value={linkedIn} onChange={e => setLinkedIn(e.target.value)} />
                        </div>
                        <br />
                        <div className="row">
                            <label className="col" htmlFor="phone">Phone:&nbsp;</label>
                            <input className="form-control col" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;
