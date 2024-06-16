import React from "react";
import '../../css/Festival.css';

const Festival = () => {
    return (
        <div className="body">
            <header className="header-festival">
                <img src="" alt="festival name" className="image" />
                <h1>Festival title</h1>
                <p>Festival description</p>
                <p>Festival Date and Location</p>
                {/* all of the above information from the databade table */}
            </header>
            <div className="button">
                <button className="btn btn-primary">Participate as business</button>
                <button className="btn btn-secondary">Become a sponsor</button>
            </div>
            <section className="info">
                <h2>Festival Details</h2>
                <p>Expected No of attendees: [Number] | No of cafes: [Number]</p>
            {/* number is updated according to participation */}
            </section>
            <section className="info">
                {/* cafes participating from database */}
                {/* food items of cafe */}
            </section>
            <section className="info">
                <h2>Festival specific contact</h2>
                <p>Email: </p>
                <form className="form">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname"></input><br/>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"></input> <br />
                    <textarea placeholder="Your Message" ></textarea><br />
                    <button type="submit" className="btn btn-primary">Submit</button><br />
                </form>
            </section>
        </div>
    );
};

export default Festival;