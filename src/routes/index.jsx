import { BrowserRouter } from "react-router-dom"
import CustomerRoutes from "./customer.routes"
import AdminRoutes from "./admin.routes"

import AuthRoutes from "./auth.routes"
import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles"

function Routes() {
  const { user } = useAuth()

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

export default Routes
