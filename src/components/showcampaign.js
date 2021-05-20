import React from "react"
import axios from "axios"
 export class Showcampaign extends React.Component {
    state = { 
        campaign:[],
        staff:[]
     }
     componentDidMount() {
        axios.get(`http://localhost:2345/group/groupinfo`)
          .then(res => {
            const campaign = res.data;
            console.log(campaign)
            this.setState({ campaign });
            
          })
          axios.get(`http://localhost:2345/staff/showstaff`)
          .then(res => {
            const staff = res.data;
            this.setState({staff})
            console.log(this.state)
            
          })
        }
      tablebody=()=>{
        var style={
            height:55,
            width:75
        }
        return this.state.campaign.map(campaign => {
            const { _id, name, description,staffid} = campaign //destructuring
            return (
               <tr key={_id}>
                  <td className=" text-monospace text-capitalize alert-secondary  ">{name}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{description}</td>
                  {this.state.staff.map(elem=>{
                      if(elem._id==staffid){
                          console.log("id found",elem._id)
                          console.log(elem.name)
                      return( <td key={elem._id} className=" text-monospace text-capitalize alert-secondary alert-info">{elem.name}</td>)
                      }
                  })}

               </tr>
            )
         })
       
    }
  
    render() { 
        return (<table className="table">
        <thead className="thead-light">
            <tr>
            <th className="text-center">campaign group</th>
                <th className="text-center">description</th>
                <th className="text-center">staff associated</th>  
            </tr>
        </thead>
        <tbody>
       {this.tablebody()}
        </tbody>
    </table> );
    }
}
 
