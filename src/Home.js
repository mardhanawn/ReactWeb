import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Profile from './Profile.js';
// import Batch from './ListBatch';
import Footer from './Footer.js';
import profile from './profile.jpeg';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <Header />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <body className="Hom-body">
                <section id="box-profile">
                    <div className="img-profile">
                        <div>
                            <img src={profile} className="img-profile" alt="profile" />
                        </div>
                    </div>
                    <div class="description">
                        <h1>Muhammad Ardhana Wahyu Nugraha</h1>
                        <p>Front End Developer</p>
                        <a href="www.linkedin.com" className="btn btn-primary">LinkedIn</a>
                        <a href="/Profile" className="btn btn-outline-primary"> Edit Profile</a>
                    </div>
                    <div className="information">
                    <div className="data">
                        <p className="field">Nickname</p>
                        <p className="text-gray">Ardhana</p>
                    </div>
                    <div className="data">
                        <p className="field">Place, Date of Birth</p>
                        <p className="text-gray">Purwokerto, Banyumas, 17 Mei 2002</p>
                    </div>
                    <div className="data">
                        <p className="field">Location</p>
                        <p className="text-gray">Purwokerto, Jawa Tengah, Indonesia</p>
                    </div>
                    <div className="data">
                        <p className="field">Years Exprience</p>
                        <p className="text-gray">1</p>
                    </div>
                    <div className="data">
                        <p className="field">Email</p>
                        <p className="text-gray">mardhanawn@gmail.com</p>
                    </div>
                    </div>
                </section>
                <div class="row">
            <div class="col silabus"> Silabus </div>
            <div class="col batch"> Batch </div>
            </div>
            </body>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default Home;