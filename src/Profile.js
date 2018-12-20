import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Button } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <section id="input-form">
            <form className="form">
            <h1>Profil Page</h1>
            <div class="form">
                <label>Email<input type="email" name="Email" />
                </label>
            </div>
            <div class="form">
                <label>Asal Sekolah<input type="text" name="Asal" />
                </label>
            </div>
            <div class="form">
                <label>Kelas<input type="text" name="Kelas" />
                </label>
            </div>
            <div class="form">
                <label>Tahun Angkatan<input type="number" name="Tahun" />
                </label>
            </div>
            <div class="form">
                <label>Jenis Kelamin<input type="text" name="Jenis" />
                </label>
            </div>
            <div class="form">
                <label>Kota<input type="text" name="Kota" />
                </label>
            </div>
            <div class="form">
                <label>Hobi<input type="text" name="Hobi" />
                </label>
            </div>
            <div class="form">
                <input type="submit" name="submit" value="Submit" class="bg-blue"/>
            </div>
            </form>
            </section>
        );
    }
}

export default Profile;