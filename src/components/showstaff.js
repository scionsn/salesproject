import React from 'react';
import axios from "axios";


export  class Showstaff extends React.Component {
    state = {
      staff: []
    }

  
    componentDidMount() {
      axios.get(`http://localhost:2345/staff/showstaff`)
        .then(res => {
          const staff = res.data;
          console.log(staff)
          this.setState({ staff });
          
        })
    }
    removestaff=()=>{
        console.log("remove called")
    }
    tablebody=()=>{
        var style={
            height:55,
            width:75
        }
        var del={
          height:50,
          width:60
      }
      
        return this.state.staff.map(staff => {
            const { _id, name, designation, email,phone ,photo} = staff //destructuring
            return (
               <tr key={_id}>
                 <td className="  text-monospace text-capitalize alert-secondary alert-info"><img style={style} src={photo}></img></td>
                  <td className=" text-monospace text-capitalize alert-secondary  ">{name}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{designation}</td>
                  <td className=" text-monospace text-capitalize alert-secondary ">{email}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{phone}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info"></td>

               </tr>
            )
         })
       
    }
  
    render() {
      return (
          <table className="table">
              <thead className="thead-light">
                  <tr>
                  <th className="text-center">photo</th>
                      <th className="text-center">name</th>
                      <th className="text-center">designation</th>
                      <th className="text-center">email</th>
                      <th className="text-center">phone</th>  
                      <th className="text-center">Incentive</th>  

                  </tr>
              </thead>
              <tbody>
             {this.tablebody()}
              </tbody>
          </table>
      
      )
    }
  }

