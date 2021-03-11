import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginBox from './components/LoginBox';

export default function userLogin() {
    return (
        <>
            <Header headingTitle = "User Login Page" />
            <LoginBox msg = "User" />
            <Footer />
</>
    )
}
