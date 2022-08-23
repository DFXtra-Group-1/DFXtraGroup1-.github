import { useState } from "react";

const ProfileEdit = ({ gradProps1, setFirstName, setLastName, setDateOfBirth, setPhone, setLinkedIn, setPersonalEmail, setDigitalFuturesEmail, setGitHub }) => {

    // const { firstName, lastName, personalEmail, digitalFuturesEmail, gitHub, linkedIn, phone } = gradProps1;

    const [firstName, setFirstName] = useState(gradProps1.firstName);
    const [lastName, setLastName] = useState(gradProps1.lastName);
    const [personalEmail, setPersonalEmail] = useState(gradProps1.personalEmail);
    const [digitalFuturesEmail, setDigitalFuturesEmail] = useState(gradProps1.digitalFuturesEmail);
    const [gitHub, setGitHub] = useState(gradProps1.gitHub);
    const [linkedIn, setLinkedIn] = useState(gradProps1.linkedIn);
    const [phone, setPhone] = useState(gradProps1.phone);

    return (
        <div className="col-sm-6">
            <div className="card m-2 border-white">
                <div className="card-body">
                    <div className="ps-5 pt-3">
                        <label htmlFor="name">Name:</label>
                        <input className="card-text" value={firstName + " " + lastName} onChange={e => {
                            setFirstName(e.target.value)
                            setLastName(e.target.value)
                        }} />
                        <br />

                        <label htmlFor="email">Personal email:</label>
                        <input className="card-text" value={personalEmail} onChange={e => setPersonalEmail(e.target.value)} />
                        <br />

                        <label htmlFor="digitalFuturesEmail">Digital Futures Email:</label>
                        <input className="card-text" value={digitalFuturesEmail} onChange={e => setDigitalFuturesEmail(e.target.value)} />
                        <br />

                        <label htmlFor="gitHub">Github:</label>
                        <input className="card-text" value={gitHub} onChange={e => setGitHub(e.target.value)} />
                        <br />

                        <label htmlFor="linkedin">Linkedin:</label>
                        <input className="card-text" value={linkedIn} onChange={e => setLinkedIn(e.target.value)} />
                        <br />

                        <label htmlFor="phone">Phone:</label>
                        <input className="card-text" value={phone} onChange={e => setPhone(e.target.value)} />
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;