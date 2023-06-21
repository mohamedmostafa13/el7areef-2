import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PlaygroundsList from "./pages/list/PlaygroundsList";
import ReservationsList from "./pages/list/ReservationsList";
import OwnersList from "./pages/list/OwnersList";
import CustomersList from "./pages/list/CutomersList";
import Single from "./pages/single/Single";
import NewOwner from "./pages/new/NewOwner";
import NewPlayground from "./pages/new/NewPlayground";
import NewReservation from "./pages/new/NewReservation";
import NewCustomer from "./pages/new/NewCustomer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { playgroundInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="owners">
              <Route index element={<OwnersList />} />
              <Route path=":ownerId" element={<Single />} />
              <Route
                path="new"
                element={<NewOwner />}
              />
            </Route>
            <Route path="playgrounds">
              <Route index element={<PlaygroundsList />} />
              <Route path=":playgroundId" element={<Single />} />
              <Route
                path="new"
                element={<NewPlayground />}
              />
            </Route>
            <Route path="reservations">
              <Route index element={<ReservationsList />} />
              <Route path=":playgroundId" element={<Single />} />
              <Route
                path="new"
                element={<NewReservation />}
              />
            </Route>
            <Route path="customers">
              <Route index element={<CustomersList />} />
              <Route path=":customerId" element={<Single />} />
              <Route
                path="new"
                element={<NewCustomer />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
