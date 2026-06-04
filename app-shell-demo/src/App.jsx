import {
 useContext
}
from "react";

import Login
from "./pages/Login";

import Dashboard
from "./pages/Dashboard";

import {
 AuthContext
}
from "./context/AuthContext";

function App() {

 const {
  user
 }
 =
 useContext(
  AuthContext
 );

 return (

  <>
   {

    user

     ?

     <Dashboard />

     :

     <Login />

   }
  </>

 );

}

export default App;