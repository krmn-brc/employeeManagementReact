import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/sidebar.css'
const Sidebar = () => {
  const [adminCollapse, setAdminCollapse] = useState(false);
  const [hideDepartment, setHideDepartment] = useState(false);



  return (
    <>
      <div className="top-row navbar navbar-dark pb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="bi bi-house-door-fill nav-menu me-2" aria-hidden="true"></span>
            Home
          </a>
          {/* <i style={{ cursor: "pointer" }} className="navbar-toggler-icon fs-5"></i> */}
        </div>
      </div>
      <div className={`nav-scrollable `}>
        <nav className="flex-column">
          <div className="nav-item px-3">
            <NavLink onClick={() => setAdminCollapse(!adminCollapse)} className="nav-link p-2" style={{ cursor: "pointer" }}>
              <div className="hstack gap-1">
                <span className="bi bi-person-fill fs-3 text-center" aria-hidden="true"
                  style={{ marginTop: "-2rem;" }}></span>
                <span>Administration</span>
              </div>
            </NavLink>
            <NavLink style={{ marginLeft: "5rem" }}
              className={`nav-link p-2 text-white  ${(adminCollapse ? "visible" : "invisible")}`}>
              <div className="hstack">
                <span className="bi bi-people fs-5 me-1 text-center" aria-hidden="true"
                  style={{ marginTop:"-2rem;" }}></span>
                <span>Users</span>
              </div>
            </NavLink>
          </div>
          <div style={{ marginTop: (adminCollapse ? "0" : "-3.5rem") }} className="nav-item px-3">
            <NavLink
              className="nav-link p-2"
              to="#"
              onClick={() => setHideDepartment(!hideDepartment)}
            >
              <div className="hstack gap-1">
                <span className="bi bi-backpack4-fill fs-3 text-center" aria-hidden="true"
                  style={{ marginTop:"-2rem;" }}></span>
                <span>Management</span>
              </div>
            </NavLink>
            <div style={{ marginLeft:"2rem" }} 
            className={`nav-link p-2 text-white  ${(hideDepartment ? "visible" : "invisible")}`}>
              <ul className="list-group">
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to="/generalDepartment" style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-file-medical fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">General Dep</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to='/department' style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-substack fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Department</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to='/branch' style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-chevron-bar-contract fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Branch</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none" }}>
                  <hr />
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to='/country' style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-geo-alt fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Country</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to='/city' style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-map-fill fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">City</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink to='/town' style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-geo fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Town</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none" }}>
                  <hr />
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-stopwatch fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Overtime Type</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-x-octagon fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Sanction Type</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-backpack3 fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Vacation Type</span>
                    </div>
                  </NavLink>
                </li>
                <li style={{ listStyle: "none" }}>
                  <hr />
                </li>
                <li style={{ listStyle: "none", cursor: "pointer" }}>
                  <NavLink style={{ cursor: "pointer" }} className="nav-link p-2">
                    <div className="hstack text-wrap">
                      <span className="bi bi-people-fill fs-5 text-center" aria-hidden="true"
                        style={{ marginTop: "-2rem !important" }}></span>
                      <span className="fs-6 ms-1">Employees</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar