// import React from 'react';
// import myImg from '../assets/homepage-blog.jpg'


// const Home = () => {
//   return (
//     <div className='home'>
//       <div className='header-title'>
//       <p>React</p>
//       <h3>My first Blog</h3>
//       </div>
      
//       <img src={myImg} alt="" />
//     </div>

//   )
// }

// export default Home

import React from 'react';
import myImg from '../assets/homepage-blog.jpg'
import { Navigate} from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'



const Home = ({user}) => {



  return (
    <div className='home'>
      <div className='header-title'>
      <p>Welcome back {user && user.user.firstName}</p>
      <h3>My first Blog</h3>
      </div>
      <img src={myImg} alt="" />
      {/* <button className='homepage-btn'>Hej</button> */}
      <Link to="/add" ><button className='homepage-btn'>Add some post</button></Link>
    </div>

  )
}

export default Home