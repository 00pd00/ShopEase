import { createContext } from "react";

const UserContext = createContext({
    LoggedInUser : null
})

export default UserContext