import { createContext, useContext, useReducer } from "react";

//created context for fake authentication
const AuthContext = createContext();

// initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// reducer function for login and logout
function reducer(state, action) {
  switch (action.type) {
    case "login":
      // on login get fakeuser details and isAuthenticated set to true
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      //set back to initialstate on logout
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

// fake user data
const FAKE_USER = {
  name: "darshan",
  email: "darshan@example.com",
  password: "darshan",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// context Provider
function AuthProvider({ children }) {
  // destructured the state to user,isAuthenticated
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //matches email and password
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  //logout
  function logout() {
    dispatch({ type: "logout" });
  }

  // context provider providing user ,isAuthenticated,login,logout as prop
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// consume context and return context
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// export context Provider
export { AuthProvider, useAuth };
