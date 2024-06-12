import { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

//Search
const Search = () => {
  const [data, setData] = useState(
    {
      "title": ""
    }
  )
  const [result, setResult] = useState([])
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }


  const readValue = () => {
    console.log(data)
    axios.post("http://localhost:8081/search", data).then(
      (response) => {
        setResult(response.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally()
  }

  //Delete
  const deleteCourse = (id) => {
    let input = { "_id": id }
    axios.post("http://localhost:8081/delete", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "success") {
          alert("Successfully Removed")
        }
        else {
          alert("Error cause in Deletion")
        }
      }
    ).catch().finally()
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="label form-label">Search for Course</label>
            <input type="text" className="input form-control" name='title' value={data.title} onChange={inputHandler} />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-warning" onClick={readValue}>SEARCH</button>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>

                  <th scope="col">COURSE TITLE</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">DATE</th>
                  <th scope="col">DURATION</th>
                  <th scope="col">VENUE</th>
                  <th scope="col">TRAINER</th>
                </tr>
              </thead>
              <tbody>
                {
                  result.map(

                    (value, index) => {
                      return <tr>

                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.date}</td>
                        <td>{value.duration}</td>
                        <td>{value.venue}</td>
                        <td>{value.trainer}</td>
                        <td> <button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>DELETE</button>  </td>
                      </tr>

                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search