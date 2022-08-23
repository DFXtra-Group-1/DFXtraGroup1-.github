const CertificatesAndAwards = ({ certificatesAndAwards }) => {
    
    const { type, issuer, award, grade, year, weight, priority, description } = certificatesAndAwards[0];
    
    return (
        <>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Issuer</th>
                    <th scope="col">Award</th>
                    <th className = "btn-group dropup" scope="col"> <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Grade </button> </th>
                    <th scope="col">Year</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <th scope="col">{type}</th>
                    <th scope="col">{issuer}</th>
                    <th scope="col">{award}</th>
                    <th scope="col">{grade}</th>
                    <th scope="col">{year}</th>
                    <th scope="col">{weight}</th>
                    <th scope="col">{priority}</th>
                    <th scope="col">{description}</th>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default CertificatesAndAwards;