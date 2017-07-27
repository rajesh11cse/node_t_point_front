import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <div>
                <section>

                    <div style={{ backgroundColor: "grey", padding: '40px' }}>
                        <div className="row">
                            <div className="col-md-4 our_topics">
                                <h3>Our Topics</h3>
                                <ul class="topics">
                                    <li><a href="">NodeJs</a></li>
                                    <li><a href="">ReactJs</a></li>
                                    <li><a href="">MongoDB</a></li>
                                    <li><a href="">Java</a></li>
                                    <li><a href="">NodeJs Interviews</a></li>
                                    <li><a href="">MongoDB Interviews</a></li>
                                </ul>
                            </div>

                            <div className="col-md-8 contact_us">
                                <h3>Contact Us</h3>
                                <p>
                                    <span className="glyphicon glyphicon-map-marker"> </span>
                                     &nbsp;2035, Rajiv Nagar, Sector 13, Gurugram, Haryana 122022, India</p>
                                <p><span className="glyphicon glyphicon-envelope"> </span>
                                    &nbsp;rajeshkumar11cse@gmail.com</p>
                                <p><span className="glyphicon glyphicon-phone-alt"> </span>
                                    &nbsp;+91 90 7126 2362</p>
                            </div>
                        </div>
                        <div className="col-md-12 hr_line"></div>
                        <center style={{ fontSize: "15px", color: "#fff" }}>Copyright © 2017-2017 nodetpoint.com. All rights reserved.</center>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;