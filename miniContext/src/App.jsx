import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
   
   <Login />

   <Profile />
   </UserContextProvider>
  )
}

export default App
