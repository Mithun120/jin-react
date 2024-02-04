import React, { useState } from 'react';
import {
    FiLogOut
}from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            // icon:<FaTh/>
        },
        {
            path:"/timesheet",
            name:"Timesheet",
            // icon:<FaUserAlt/>
        },
        {
            path:"/leave",
            name:"Leave",
            // icon:<FaRegChartBar/>
        },
        {
            path:"/workfromhome",
            name:"Work From Home",
            // icon:<FaCommentAlt/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            // icon:<FaShoppingBag/>
        },
        {
            path:"/survey",
            name:"Survey",
            // icon:<FaThList/>
        },
        {
            path:"/servicedesk",
            name:"Service Desk",
            // icon:<FaThList/>
        },
        {
            path:"/forms",
            name:"Forms",
            // icon:<FaThList/>
        },
        {
            path:"/travel",
            name:"Travel",
            // icon:<FaThList/>
        },
        {
            path:"/survey",
            name:"Survey",
            // icon:<FaThList/>
        },
        {
            path:"/expenses",
            name:"Expenses",
            // icon:<FaThList/>
        },
        {
            path:"/resourcing",
            name:"Resourcing",
            // icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAiCAYAAACqVHINAAAABHNCSVQICAgIfAhkiAAAAjZJREFUSEu1lj1IHFEUhR2wEIloYSGCsChEJAYTAoqCGDAoBCL+BBLSWRqEVBY2Foq9naWVkDpCGlEECy0UTGxcjPiDxSYkFlkhFsL6HXm7mHVn3nV298Jlduedc7+5b97Mm6CixJHJZBKUHCL7yA4yEZSKQfE6ak2Tk/k1SwIB8JTCK2RtoYsuGgKgh8JLYQBBi4IAeEKNz1GAUkCWKdLpu6+xO6GLYYrP+wBFdQJE0/S4bBAANRRftQBidwLkOeaFckNGAUyUG/IBgNIUsVYX0/WO6kpTxIW8pfqYiRD3iaeTEbx6TkwRt5M3VFeaIi7kNdWVpgho/Z9TnnL8Qi4HQfAtyo1nkPEBE0H3BMOvAuKvnJsBdlaoEJ5XnO9/COQoRPyX8xOAtvPHgbzknNIU6mTPo1RHmsZc4Onlj9IUgmx6lGnGPwE6zOrwdPNbO6IpBNH8++InkPE7EG1UXT5TdlwQ7c/VBsMioA3p8LzgoLREWpAplK0G9RmQWQd5xlFpiZQgej3oQ8wSc4Au8LQj1meQJZKCNKD8aFGjWQJyjKeN30pLrN2+VjC959BkcKwD2UWvvd2yv/9Bv5WFNGLS96svdjDtAGlG2OITM76NPp17QTqj1n9UfMe0jzaBSBkVB2hTEvz3FnY3VFcZFkmMSQPkHN2PbJF7r3q3EMJu6jHmEw8k10EoxC2EKjcdWnl34yQCoqnR+FX+NERuWlxxJYZ68pHLlObZdasLuHT5m/PXYXN8A0QF5eZCS3rAAAAAAElFTkSuQmCC" style={{display: isOpen ? "block" : "none"}} className="logo"/>
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none",
                fontSize: "14px"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }<div className="bottom_section">
               <div className="line" style={{ borderTop: "1px solid #fff",display: isOpen ? "block" : "none" }}></div>
               <NavLink to="/logout" className="link" activeClassName="active">
                    <div
                        style={{
                            display: isOpen ? "flex" : "none",
                            alignItems: 'center',
                            fontSize: "14px",
                            margin: '10px',
                            gap:'110px'
                        }}
                        className="link_text"
                    >
                        Logout
                        <FiLogOut style={{ marginLeft: '10px' }} />
                    </div>
                </NavLink>
                </div>
           </div>
           
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;