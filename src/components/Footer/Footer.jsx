import React from 'react';

const Footer = () => {
    return (
        <div className='mt-24'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Recipes</a>
                    <a className="link link-hover">Food</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='p-10 bg-neutral text-neutral-content text-center'>
                <p>Copyright © 2023 - All right reserved by Dish-Dash Ltd</p>
            </div>
        </div>
    );
};

export default Footer;