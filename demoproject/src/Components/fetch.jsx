import axios from "axios"
import { useEffect, useState } from "react"
import './Fetch.css';

function Fetch(){

    let[data,setdata]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then(res=>setdata(res.data))
        .catch(err=>console.error(err))

        },[])
    return(
        <>
       
        

    <div className="dashboard-container22">
            <h2>Admin Dashboard</h2>
            <table className="data-table22" border={"1px"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    
        
        </>
    )
}
export default Fetch