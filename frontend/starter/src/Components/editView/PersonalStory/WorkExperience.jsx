const WorkExperience = ({ workExperience }) => {
  

  const { type, employer, position, fromDate, toDate, weight, priority, description } = workExperience[0]; 

    return (
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Employer or other organization</th>
      <th scope="col">Position</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Weight</th>
      <th scope="col">Priority</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
            <th scope="row">{type}</th>
      <td>{employer}</td>
      <td>{position}</td>
      <td>{fromDate}</td>
      <td>{toDate}</td>
      <td>{weight}</td>
      <td>{priority}</td>
      <td>{description}</td>
    </tr>
  </tbody>
</table>
    )
}

export default WorkExperience; 