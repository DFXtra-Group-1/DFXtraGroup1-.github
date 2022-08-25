import Nationality from "./Nationality";
const DropDowns = ({ gradProps2, setProps2 }) => {
    const { gender, personality, nationality } = gradProps2;
    const { setGender, setPersonality, setNationality } = setProps2;
    return (
        <>
            <div className="w-50">
                <select className="form-select" aria-label="Default select example" onChange={e => setGender(e.target.value)} defaultValue={gender}>
                    <option hidden >Gender</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="transgender">Transgender</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>

                <br />

                <Nationality nationality={nationality} setNationality={setNationality} />

                <br />

                <select className="form-select" aria-label="Default select example" onChange={e => setPersonality(e.target.value)} defaultValue={personality}>
                    <option hidden >Personality Type</option>
                    <option value="INTJ">Architect - INTJ</option>
                    <option value="INTP">Logician - INTP</option>
                    <option value="ENTJ">Commander - ENTJ</option>
                    <option value="ENTP">Debater - ENTP</option>

                    <option value="INFJ">Advocate - INFJ</option>
                    <option value="INFP">Mediator - INFP</option>
                    <option value="INFJ">Protagonist - INFJ</option>
                    <option value="INFP">Campainger - INFP</option>

                    <option value="ISTJ">Logistician - ISTJ</option>
                    <option value="ISFJ">Defender - ISFJ</option>
                    <option value="ESTJ">Executive - ESTJ</option>
                    <option value="ESFJ">Consul - ESFH</option>

                    <option value="ISTP">Virtuoso - ISTP</option>
                    <option value="ISFP">Adventurer - ISFP</option>
                    <option value="ESTP">Entrepreneur - ESTP</option>
                    <option value="ESFP">Entertainer - ESFP</option>

                </select>
                <br />
            </div>
        </>
    );

}

export default DropDowns;


