import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Details from "../pages/Details"
import NewDish from "../pages/NewDish"

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}

export default CustomerRoutes
