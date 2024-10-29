import React from 'react'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import DarkSelector from '../Common/SwitchDark'
import TrainerMenu from '../Common/TrainerMenu';
import UserMenu from '../Common/UserMenu';
import LogMenu from '../Common/LogMenu';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo-magazzino.svg"



function NavbarFixedTop() {
  // Dark theme logics
  const count = useSelector((state) => state.counter.value)


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

   //Javascript split method to get the name of the path in array
   // Ex. splitLocation: ['', 'aboutus']
   const splitLocation = pathname.split("/");

   const {user} = UseAuthContext()

    const role = useSelector((state) => state.setRole.value)


  console.log("role FROM THE NAVBAR")
  console.log(role)

  return (
    <>
        <div className='container'>
        <nav className="navbar bg-body-tertiary fixed-top border-bottom border-2" data-bs-theme={count}>
        <div className="container">
            <Link className="navbar-brand d-flex" to={'/'}>
            <img src={logo} style={{width:200}}/>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse pt-2" id="navbarCollapse">
            {role == "admin" &&
            <TrainerMenu />
            }
            {role == "user" &&
            <UserMenu />
            }
          <LogMenu />
          <DarkSelector />
            </div>
        </div>
        </nav>
        </div>
    </>
  )
}

export default NavbarFixedTop
