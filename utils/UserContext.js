import { createContext } from "react";

const UserContext = createContext({
  username: 'Default user'
})

export default UserContext;