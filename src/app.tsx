import { NavLink, Outlet } from "react-router-dom";
import { Mails } from "./pages/mails";
import { Newsletter } from "./pages/newsletter";

export function App() {
  return (
    <div className="">
      <NavLink to={"/Mails"}>
        <Mails />
      </NavLink>{" "}
      |
      <NavLink to={"/Newsletter"}>
        <Newsletter />
      </NavLink>
      <Outlet />
    </div>
  );
}
