import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddCourse = () => {
     const [data,setData] =useState(
        {
        "title":"",
        "description":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainer":"",
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
        (response) => {
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Successfully Registered")
                }
            else
                {
                    alert("Error")
                    
                }
        } 
    ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label form-label">Title</label>
                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />                      
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Description</label>
                        <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Date</label>
                        <input type="date" className="form-control" name='date' value={data.data} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Duration</label>
                        <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Venue</label>
                        <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Trainer</label>
                        <input type="text" className="form-control" name='trainer' value={data.trainer} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary"  onClick={readValue} >ADD COURSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse