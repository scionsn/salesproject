import React from 'react';
import axios from "axios";


export  class Prodlist extends React.Component {
    state = {
      prod: []
    }

  
    componentDidMount() {
      axios.get(`http://localhost:2345/prod/prodinfo`)
        .then(res => {
          const prod = res.data;
          console.log(prod)
          this.setState({ prod });
          
        })
    }
    tablebody=()=>{
        var style={
            height:55,
            width:75
        }
        return this.state.prod.map(prod => {
            const { _id, name, description, status,price,photo} = prod 
            return (
               <tr key={_id}>
                 <td className="  text-monospace text-capitalize alert-secondary alert-info"><img style={style} src={photo}></img></td>
                  <td className=" text-monospace text-capitalize alert-secondary  ">{name}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{description}</td>
                  <td className=" text-monospace text-capitalize alert-secondary ">{status}</td>
                  <td className=" text-monospace text-capitalize alert-secondary alert-info">{price}</td>

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
                      <th className="text-center">description</th>
                      <th className="text-center">status</th>
                      <th className="text-center">price</th>
                      <th className="text-center">operations</th>  
  
                  </tr>
              </thead>
              <tbody>
             {this.tablebody()}
              </tbody>
          </table>
      
      )
    }
  }

