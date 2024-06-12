import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const VIewAll = () => {
  const [data,changeData] =useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8081/view").then((response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
      <NavBar/>
      <div className="container">
            <div className="row">
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
                                data.map(
                                    
                                    (value, index) => { return   <tr>
                                                
                                                <td>{value.title}</td>
                                                <td>{value.description}</td>
                                                <td>{value.date}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.trainer}</td>
                                                
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

export default VIewAll