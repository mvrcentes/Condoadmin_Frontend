import services from "../../assets/services.svg"
import houses from "../../assets/houses.svg"
import announce from "../../assets/announce.svg"
import complaints from "../../assets/complaints.svg"
import logout from "../../assets/logout.svg"

const AdminMenu = [
    [services, "Servicios", "/admin/services", ],
    [houses, "Casas", "/admin/houses"],
    [announce, "Anuncios", "/admin/announce"],
    [complaints, "Quejas", "/admin/complaints"],
    [logout, "Salir", "/login", () => {
      sessionStorage.removeItem('token')
    }],
]

export default AdminMenu
