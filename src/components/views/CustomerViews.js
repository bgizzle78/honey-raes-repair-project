import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerForm } from "../profile/CustomerForm"
import { Profile } from "../profile/Profile"
import { TicketEdit } from "../tickets/TicketEdit"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"


export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="profile" element={ <Profile /> } />
                <Route path="customers" element={ <CustomerForm /> } />
                <Route path="tickets" element={ <TicketList />} />
				<Route path="ticket/create" element={ <TicketForm /> } />
                <Route path="tickets/:ticketid/edit" element={ <TicketEdit /> } />
            </Route>
        </Routes>
    )
}
