
import React from 'react';
import './Footer.css'; 
                
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p><b>Organizers</b></p>
                    <p>John Charles: +91 9148592710</p>
                    <p>Harsh Mawandia: +91 9071607036</p>
                    <p>Aditya Paul: +91 6291743375</p>
                    <br />
                </div>
            <div className="footer-center">
            <p><b>No-Rage-Quit</b></p>
            <p>Department of Computer Science and Engineering</p>
            <p>Dayananda Sagar Academy of Technology and Management</p>
            <p>Udayapura, Kanakapura Road</p>
            <p>Bangalore, Karnataka</p>
            <br />
            </div>
            <div className="footer-right">
            <p><b>Find Us Here:</b></p>
            <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            </div>
            </div>
            </footer>
            );
        };
                
    export default Footer;
                