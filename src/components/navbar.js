import React from 'react';
import {Link} from "react-router-dom"
export  const Navbar=()=>{
    var style={
        height:50,
        width:50
    }
    return( <nav className="navbar navbar-dark bg-dark navbar-expand">
       <Link className="navbar-brand" to="/"> <img style={style} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFUA7rh2OKPZA/company-logo_200_200/0?e=2159024400&v=beta&t=CnhcZRYOwlWgAEp5LWFKPfBEpQxBtBBMrkzl9TDzV4A"></img>
</Link>
&nbsp;
    {/* <h1 className="navbar-e"></h1> */}
<div>
<ul className="navbar-nav mr-auto">
<li className="navbar-item font-weight-bold"><Link className="nav-link" to="/showstaff"><strong>Staffs</strong></Link></li>
<li className="navbar-item font-weight-bold"><Link className="nav-link" to="/showcampaign"><strong>ShowCampaigns</strong></Link></li>
<li className="navbar-item font-weight-bold" ><Link className="nav-link" to="/leadinfo"><strong>LeadInfo</strong></Link></li>
<li className="navbar-item font-weight-bold"><Link className="nav-link" to="/prodinfo"><strong>ProductsInfo</strong></Link></li>
<li className="navbar-item font-weight-bold"><Link className="nav-link" to="/staffperform"><strong>StaffPerformance</strong></Link></li>

</ul>

</div>
</nav>)
}