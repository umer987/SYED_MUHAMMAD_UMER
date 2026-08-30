// import { createContext, useState, useEffect, useContext } from 'react';

// // 1. Capitalized Context
// const AuthContext = createContext();

// // 2. THIS LINE WAS THE ISSUE. It must be exported exactly as AuthProvider
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); 

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/', {
//           method: 'GET',
//           credentials: 'include', 
//         });
        
//         if (response.ok) {
//           setIsAuthenticated(true);
//         }
//       } catch (error) {
//         console.error("Auth check failed", error);
//       } finally {
//         setIsLoading(false); 
//       }
//     };
//     checkAuth();
//   }, []);
  
//   const login = async (username, password) => {
//     try {
//       const response = await fetch('http://localhost:3000/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//         credentials: 'include', 
//       });

//       if (response.ok) {
//         setIsAuthenticated(true);
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error("Login failed", error);
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await fetch('http://localhost:3000/api/admin/logout', { 
//         method: 'POST',
//         credentials: 'include'
//       });
//       setIsAuthenticated(false);
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // 3. Export the hook
// export const useAuth = () => useContext(AuthContext);





import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // withCredentials replaces credentials: 'include'
        const response = await axios.get('http://localhost:3000/', {
          withCredentials: true 
        });
        
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        // Axios jumps here automatically if the server returns 401 Unauthorized
        console.error("Auth check failed", error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false); 
      }
    };
    checkAuth();
  }, []);
  
  const login = async (email, password) => {
    try {
      // Axios auto-stringifies the body and sets the Content-Type header
      const response = await axios.post(
        'http://localhost:3000/api/admin/login',
        {email, password }, // Map frontend 'username' to backend 'email'
        { withCredentials: true }
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed", error.response?.data?.message || error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/admin/logout', 
        {}, // Axios POST requires a body parameter before the config object
        { withCredentials: true }
      );
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error.response?.data?.message || error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);