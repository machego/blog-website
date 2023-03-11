import Topbar from "./components/topbar/Topbar.jsx";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";

function App() {
  return (
    <>
      <Topbar />
      <Register />
    </>
  );
}

export default App;
