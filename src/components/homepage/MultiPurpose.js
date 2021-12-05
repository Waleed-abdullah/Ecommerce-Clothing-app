import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewPost from './NewPost';

const MultiPurpose = () => {

    const comp = 'newPost'

    if (comp === 'newPost'){
        return (
            <React.Fragment>
                <NewPost/>
            </React.Fragment>
        )
    }
    else if (comp === 'notifications'){
        return (
            <React.Fragment>
                Notifications
            </React.Fragment>
        )
    }
    else if (comp === 'messages'){
        return (
            <React.Fragment>
                Messages
            </React.Fragment>
        )
    }
    else if (comp === 'profile'){
        return (
            <React.Fragment>
                Profile
            </React.Fragment>
        )
    }
}
export default MultiPurpose
