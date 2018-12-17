import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import profile from './src/profile.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header">
            <nav>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PROFILE</a></li>
                <li><a href="#">ABOUT</a></li>
              </ul>
            </nav>
        </header>
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
              <a href="#" className="button bg-green">Edit</a>
              <a href="#" className="button border-blue">Resume</a>
          </div>
          <div className="information">
              <div className="data">
                  <p className="field">Place, Date of Birth</p>
                  <p className="text-gray">Purwokerto, Banyumas, 17 Mei 2002</p>
              </div>
              <div className="data">
                  <p className="field">Age</p>
                  <p className="text-gray">16</p>
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
          <div className="Hom-silabus"> Silabus </div>
          <div className="Hom-batch"> Batch </div>
          <button type="button" class="btn btn-primary">Start Test</button>
        </body>
        <footer className="Hom-footer">
          <div> Copyright Reserved 2018 </div>
        </footer>
      </div>
    );
  }
}

export default Home;