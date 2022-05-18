import "./Details.css"
import logo from '../../images/apple.webp'
import React from 'react'
import Login from "./../Login/Login"

function Details({ user }) {
  return (
    <section className="details-section">
      <nav className="details-nav" style={{gridArea:'nav'}}>
        <img src={logo} alt="" height={50} />
        <span style={{ textAlign: 'center', display: 'table-cell', lineHeight: '3rem' }}>{user}</span>
        <button onClick={Login}>Logout</button>
      </nav>
      <aside className="details-sidebar" style={{gridArea:'sidebar'}}>
        Dashboard
      </aside>
      <form className="details-form" action="post" style={{gridArea:'form'}}>
        <div style={{textAlign:"left"}} >Add Employee</div>
        <hr />
        <div>Details for Appointment Letter</div>
        <hr />
        <div className="details-form-fields">

          <label htmlFor="Adhaar">Adhaar No :</label>
          <input
            type="number"
            name='ADhaar'
            placeholder="Enter Adhaar No" />
  
          <label htmlFor="FullName">FullName :</label>
          <input
            type="text"
            name='FullName' 
            placeholder="Enter FullName"/>
            <label htmlFor="FatherName">Father Name :</label>
          <input
            type="text"
            name='FatherName'
            placeholder="Enter Father name" />
  
          <label htmlFor="Address">Address :</label>
          <input
            type="text"
            name='Address'
            placeholder="Enter Address" />
            <label htmlFor="City">City:</label>
          <input
            type="text"
            name='City'
            placeholder="Enter City" />
  
          <label htmlFor="Mob Number">Mobile Number :</label>
          <input
            type="number"
            name='Mobile Number'
            placeholder="Enter Mobile Number" />
             <label htmlFor="Adhaar Card Upload">Adhaar Card Upload : </label>
            <div class="upload-btn-wrapper">
               < button class="btn">Upload a file</button>
            <input type="file" name="myfile" />
              </div>
              <label htmlFor="Photo">Photo Upload : </label>
            <div class="upload-btn-wrapper">
            < button class="btn">Upload a file</button>
            <input type="file" name="myfile" />
              </div>
        <span style={{gridColumn:'1 / span 2'}}>
       
        < button class="btn2" onClick={alert}>Submit</button>
        </span>
</div>
      </form>
    </section>
  )
}

export default Details