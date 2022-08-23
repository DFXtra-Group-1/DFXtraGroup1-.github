const SchoolQualifications = ({schoolQualifications}) => {

    const { school, examType, subject, grade, year, weight, priority, description } = schoolQualifications[0];

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">School</th>
                    <th scope="col">Exam Type</th>
                    <th scope="col">Subject</th>
                    <th className="btn-group dropup" scope="col"> <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Grade </button> </th>
                    <th scope="col">Year</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{school}</td>
                    <td>{examType}</td>
                    <td>{subject}</td>
                    <td>{grade}</td>
                    <td>{year}</td>
                    <td>{weight}</td>
                    <td>{priority}</td>
                    <td>{description}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SchoolQualifications; 