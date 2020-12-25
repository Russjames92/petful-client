import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <section className="info">
                    <h3 className="sub-header">How To Get Started</h3>
                    <p className="page-instruct">Click the link below to view available furry friends!</p>
                    <br />
                    <p className="page-instruct">Add your name to the list, and then claim you dog or cat!</p>
                    <br />
                </section>

                <section className="buttons">
                    <Link to="/adopt">
                        <button className="start-btn">Get Started Now!</button>
                    </Link>
                </section>
            </div>
        );
    }
}