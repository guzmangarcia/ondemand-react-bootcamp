import { createContext, useState,useMemo } from 'react';

//create a context, with createContext api
const UserDetailsContext = createContext();

const UserDetailsContextProvider = (props) => {
        // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState([]);

    // return (
    //             // this is the provider providing state
    //     <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
    //         {props.children}
    //     </UserDetailsContext.Provider>
    // );

    const value = useMemo(() => ({userDetails, setUserDetails}),[userDetails]);
     
     
         return (
             <UserDetailsContext.Provider value={value}>
                 {props.children}
             </UserDetailsContext.Provider>
         );
     };

export { UserDetailsContext, UserDetailsContextProvider };