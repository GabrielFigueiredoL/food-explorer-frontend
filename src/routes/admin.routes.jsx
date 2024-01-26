import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Details from "../pages/Details"
import NewDish from "../pages/NewDish"
import EditDish from "../pages/EditDish"


function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  )
}

export default AdminRoutes
