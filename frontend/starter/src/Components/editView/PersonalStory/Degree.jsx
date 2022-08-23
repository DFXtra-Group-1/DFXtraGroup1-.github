// import Calendar from 'react-calendar';

const Degree = ({ degrees }) => {

    const { university, degreeSubject, degreeLevel, grade, fromDate, toDate, weight, priority, description } = degrees[0]; 

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">University</th>
                    <th scope="col">Degree Subject</th>
                    <th scope="col">Degree Level</th>
                    <th className="btn-group dropup" scope="col"> <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Grade </button> </th>
                    <th scope="col"> From </th>
                    <th scope="col">To</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
            <th scope="row">{university}</th>
                    <td>{degreeSubject}</td>
                    <td>{degreeLevel}</td>
                    <td>{grade}</td>
                    <td> <form action="">
                            <input type="date" />
                        {fromDate} </form>
                    </td>
                    <td>
                    <form action="">
                            <input type="date" />
                            {toDate} </form>
                    </td>
                    <td>{weight}</td>
                    <td>{priority}</td>
                    <td>{description}</td>
                </tr>
            </tbody>

             <div>
      <label>Name</label>
      <input type="text" value="Hello" />
      <label>City</label>
      <input type="text" value="Hello" />
      <button > Add </button>
    </div>
        </table>
    );
}

export default Degree;