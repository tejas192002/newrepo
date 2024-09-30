import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='df footer'>
                <p className='footer-color'>&copy; 2024 Spira Power - All Rights Reserved.</p>
                <div className='df footer1'>
                    <Link to="#" className='footer-color'>Privacy Policy</Link>
                    <Link to="#" className='footer-color'>Cookies</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer