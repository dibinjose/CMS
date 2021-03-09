import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginBox from './components/LoginBox'

export default function userLogin() {
    return (
        <div>
            <Header headingTitle = "Admin Login Page" />
            <LoginBox msg = "Admin" />
            <Footer />
        </div>
    )
}

