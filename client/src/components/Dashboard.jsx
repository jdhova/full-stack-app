import React from 'react'

const Dashboard = () => {
  return (
   
    <div className='dash-main'>
        {/* <h3> Welcome to {user.displayName}s'Dash Board</h3> */}
           
            <br></br>
           {/* <h4>  Good Day {user.displayName}  its {today}{check()} </h4>  */}
            <h4>Kindly fill in hours worked</h4>
        {/* <Button onClick={handleSignOut}>Logout</Button> */}

 

    <div className='form-container'>


    
        <div className="form-group">
            <label htmlFor="inputAddress">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"

            // onChange ={(e)=> {
            //     setUserName(e.target.value)}}

            />

        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Position</label>
            <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Position"
            // onChange ={(e)=> {
            //     setUserPosition(e.target.value)}}
            />
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Hours worked</label>
            <input
            type="number"
            className="form-control"
            id="hoursworked"
            placeholder="Hours worked"
            // onChange ={(e)=> {
            //     setUserHours(e.target.value)}}
            />
        </div>

       

        <button 
        // onClick = {createUser} 
        type="submit" className="btn btn-primary">
            Submit
        </button>
    </div>

        
                 <h3 className='work'>Employee work hours </h3>
       
        <div className='results'>
          
            <h3>Results</h3>

            {/* {users.map((user) => {
                        return <div className='results2'>
                            <h3>Name: {user.name}</h3>
                            <h3>Position: {user.position}</h3>
                            <h3>Hours worked: {user.hours}</h3>
                            </div>
                })} */}

        </div>

          

    </div>
  )
}

export default Dashboard