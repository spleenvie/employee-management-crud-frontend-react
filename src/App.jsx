import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeesComponents from './components/ListEmployeesComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent'

function App() {
  return (
    <>
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployeesComponents />}></Route>
              <Route path="/employees" element={<ListEmployeesComponents />}></Route>
              <Route path="/add-employee/:id" element={<CreateEmployeeComponent/>}></Route>
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>}></Route>
              {/* {<Route path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route>} */}
            </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
    </>
  )
}

export default App
