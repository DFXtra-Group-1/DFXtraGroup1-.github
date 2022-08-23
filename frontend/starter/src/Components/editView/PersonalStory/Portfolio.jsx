const Portfolio = ({ portfolio }) => {
  
  const { title, URL, year, weight, priority, description } = portfolio[0];
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Year</th>
            <th scope="col">Weight</th>
            <th scope="col">Priority</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{title}</th>
            <td>{URL} </td>
            <td>{year}</td>
            <td>{weight}</td>
            <td>{priority}</td>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default Portfolio; 