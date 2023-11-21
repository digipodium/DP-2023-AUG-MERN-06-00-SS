import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const UserAuth = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    if(currentUser !== null){
        return children;
    }else{

        // show error message
        enqueueSnackbar('Please login to continue', {
            variant: 'error',
            anchorOrigin: {
                horizontal: 'center',
                vertical: 'top'
            }
        });
        // redirect to login page
        return <Navigate to="/login" />
    }
}

export default UserAuth;