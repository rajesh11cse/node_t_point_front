import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";
//import _ from "lodash";
//const MY_API_KEY = "AIzaSyDUPV7m4GKQvWPaCwmanKRzo_YlVSur1Y8" // fake

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        window.initMap = this.initMap.bind(this);
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCkLE6-GA3XhwuKYlxlPQRRYoPVzHhNlpE&callback=initMap')
    }



    initMap() {
        var uluru = { lat: 28.499384, lng: 77.086251 };
        var map = new google.maps.Map(this.refs.map, {
            zoom: 10,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    loadJS(src) {
        var ref = window.document.getElementsByTagName("script")[0];
        var script = window.document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        ref.parentNode.insertBefore(script, ref);
    }



    render() {
        return (
            <section>
                
                <div className="col-md-6">
                    <div className="row" style={{ border: '1px solid grey', borderRadius: '2px' }}>
                        <p style={{ textAlign: 'center', color: '#fff', fontSize: '20px', backgroundColor: 'grey', padding: '5px' }}>Contact Us</p>

                        {/*Full Name */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="name">Full Name <em style={{ color: 'red' }}>*</em></p>
                            <input type="text" value={this.state.name} className="form-control"
                                name="name" onChange={(event) => this.handleUserInput(event)} />
                        </div>


                        {/*Mobile Number */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="email">Phone Number <em style={{ color: 'red' }}>*</em></p>
                            <input type="number" value={this.state.phone} className="form-control"
                                name="phone" onChange={(event) => this.handleUserInput(event)} />
                        </div>

                        {/*Email */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="email">Email address <em style={{ color: 'red' }}>*</em></p>
                            <input type="email" value={this.state.email} className="form-control"
                                name="email" onChange={(event) => this.handleUserInput(event)} />
                        </div>

                        {/*Email */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="message">Message <em style={{ color: 'red' }}>*</em></p>
                            <textarea type="text" style={{ maxWidth: '100%' }} value={this.state.message} rows="5" className="form-control"
                                name="message" onChange={(event) => this.handleUserInput(event)} />
                        </div>


                        {/*Submit */}
                        <div className='form-group col-md-12'>
                            <button type="submit" style={{ color: '#fff', backgroundColor: 'grey', outline: 'none' }} className=" col-md-12 btn" >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='form-group col-md-12'></div>
                </div>
                <div className="col-md-6">
                    <div className="thumbnail" ref="map" style={{height: '300px', width: '100%' }}></div>

                    <div>
                        <h2>Postal Address</h2>
                        <p>2035, Rajiv Nagar, Sector 13, Gurugram, India</p>
                        <p>Email: rajeshkumar@gmail.com</p>
                        <p>Tel: +91 90 7126 2362</p>
                        <p>Fax: +91 90 7126 2362</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;