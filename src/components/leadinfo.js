import React from 'react';
import axios from "axios"
class Leadinfo extends React.Component {
    state = {
        leads:[],
        leadinteract:[]
      }
      componentDidMount(){
       
        axios.get(`http://localhost:2345/lead/leadinfo`)
        .then(res => {
          const leads = res.data;
        //   console.log(leads)
          this.setState({ leads });
          
        })
       
      }
      tablebody=()=>{
        var style={
            height:55,
            width:75
        }

        return this.state.leads.map(leads => {
            const { _id, name,phone,interestin,email} = leads //destructuring
            // console.log(interestin.phone)
            return (
               <tr key={_id}>
                  <td className=" text-monospace text-capitalize alert-secondary  ">{name}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{phone}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{email}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{interestin.phone}</td>
               </tr>
            )
         })
       
    }
    render() { 
        return ( 
            <table className="table">
        <thead className="thead-light">
            <tr>
            <th className="text-center">Leadname</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Email</th>  
                <th className="text-center">Interest</th>   
            </tr>
        </thead>
        <tbody>
       {this.tablebody()}
        </tbody>
    </table>
        );
    }
}
 
export default Leadinfo;