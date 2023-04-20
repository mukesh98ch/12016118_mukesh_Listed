
import React, { useState } from 'react'
import './dashboard.css'
import Charts from 'react-apexcharts'
import PieChart from './Analytics'
import Noti from '../Image/notif.png'
import { MdDashboardCustomize } from 'react-icons/md';
import { FcMoneyTransfer } from 'react-icons/fc';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FiUsers} from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import Revenue from '../Image/reven.png'
import Trans from '../Image/trans.png'
import Like from '../Image/likes.png'
import User from '../Image/users.png'
import Profile from '../Image/profile.png'
const Dashboard = () => {
  const [state, setState]=useState({
    options: {
      chart: {
        id:"basic-line"
      },
      xaxis: {
        categories: [1991,1992,1993,1994, 1995, 1996,1997,1998,1999]
      
      }
    },
    series: [
      {
      name: "Guest",
      data: [20,40,35,60,49,60,70,81]
      },
      {
        name: "User",
        data: [20,30,45,50,40,60,70,91]
        }

  ], 

  })
  return (
  <div className='Container'>
   <div className='left'>
    <div><h1>Board.</h1>
      <div>
        <p className='dash'><div className='icd'><MdDashboardCustomize/></div>Dashboard</p>
        <p className='tran'><div className='icd'><FcMoneyTransfer/></div>Transactions</p>
        <p className='sch'><div className='ics'><AiOutlineSchedule/></div>Schedules</p>
        <p className='user'><div className='icu'><FiUsers/></div>Users</p>
        <p className='sett'><div className='ics'><AiOutlineSetting/></div>Settings</p>
   
       <p className='footer1'>Help</p>
        <p className='footer2'>Contact Us</p>
      </div>
    
    </div>

   </div>
   <div className='rigt'>
   <div className='right'>
    <div>
      <div className='hed'>
      <h2>Dashboard</h2>
      </div>
         <input type='Search' placeholder='Search...' className='sear'/><div className='icse'><AiOutlineSearch/></div>
         <img src={Noti}  className='noti'/>
          <img src={Profile} className='Pro'/>
      <span className='rev'><img src={Revenue} className='rev1'/>Total Revenues<p><b> $2,240,000</b></p>
      </span>
      <span className='tans'><img src={Trans} className='tans1'/>Total Transactions<p><b>1520</b></p></span>
      <span className='like'><img src={Like} className='like1'/>Total Likes<p><b>9,721</b></p></span>
      <span className='tuser'><img src={User} className='user1'/>Total Users<p><b>892</b></p></span>
    </div>
    <div className='Analytics'>
       <h3>Activites</h3>
       <Charts 
       options={state.options}
       series={state.series}
       type="line"
       width="1000"
       height="300"
       />
    </div>
    <div className='pie'>
     <h3>Top Products</h3>
     <h5 className='date'>1991-1999</h5>
     <PieChart/>
    </div>
    <div className='Todaysch'>
       <h5>Today's Schedule</h5>
      <p className='keypoint'>
          Meeting with suppliers from kuta, Bali
          <br/>
          10:20-11:20
          <br/>
          at Sunset Road, Kuta, Bali
      </p>
      <p className='keypoint2'>
      Check operation at Giga Factory 1
      <br/>
      18.00-20.00
      <br/>
      at Central Jakarta
      </p>
      <h5 className='see'>See All</h5>
     </div>
    </div>
   </div>
  </div>
)
}

export default Dashboard
