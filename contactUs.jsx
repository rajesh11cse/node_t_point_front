import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import axios from 'axios';
import { Popover, Tooltip, Button, Modal } from 'react-bootstrap';
//import _ from "lodash";
//const MY_API_KEY = "AIzaSyDUPV7m4GKQvWPaCwmanKRzo_YlVSur1Y8" // fake

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message_sent: false,
            error: false,
            showModal: false
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


    sendMessage() {
        // this.open = this.open.bind(this);
        var FormError = false;
        

        if (!this.refs.name.value) {
            FormError = 'Full name is required.';
        } else if (!this.refs.phone.value) {
            FormError = 'Phone number is required.';
        } else if (this.refs.phone.value.length > 10 || this.refs.phone.value.length < 10) {
            FormError = 'Phone number is not valid.';
        } else if (!this.refs.email.value) {
            FormError = 'Email address is required.';
        } else if (!this.refs.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            FormError = 'Email address is not valid.';
        } else if (!this.refs.message.value) {
            FormError = 'Message is required'
        }

        if (FormError) {
            this.setState({ error: FormError });
            this.open()
            return;
        }

        var myData = {
            name: this.refs.name.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
            message: this.refs.message.value,
        }
        var getData = axios({
            method: 'POST',
            url: '/api/nodetpoint/send_mail',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            responseType: 'application/json',
            data: myData
        })
        getData.then(function (response) {
            if (response.data.success) {
                console.log("Success")
            }
        })
        getData.catch(function (error) {
            console.log(error);
            return;
        });

        this.refs.name.value = '';
        this.refs.phone.value = '';
        this.refs.email.value = '';
        this.refs.message.value = '';
        this.setState({ message_sent: true });

    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <section>

                <Modal bsSize="small" aria-labelledby="contained-modal-title-sm" show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <center><h5>{this.state.error}</h5></center>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>


                {this.state.message_sent ?
                    <div className="col-md-12">
                        <div className="col-md-6" style={{ padding: '5px', color: 'Green', fontSize: '15px', textAlign: 'center' }}>
                            <b>Message sent successfully!</b>
                        </div>
                    </div>
                    : ''}

                <div className="col-md-6">
                    <div className="row" style={{ border: '1px solid #e5e3e3', borderRadius: '2px' }}>
                        <p style={{ textAlign: 'center', borderBottom: '1px solid #e5e3e3', color: '#000', fontSize: '20px', backgroundColor: 'white', padding: '5px' }}>Contact Us</p>

                        {/*Full Name */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="name">Full Name</p>
                            <input ref="name" type="text" className="form-control"
                                name="name" placeholder="Full Name" />
                        </div>



                        {/*Mobile Number */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="email">Phone Number</p>
                            <input ref="phone" type="number" className="form-control"
                                name="phone" placeholder="Phone Number" />
                        </div>

                        {/*Email */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="email">Email address</p>
                            <input ref="email" type="email" className="form-control"
                                name="email" placeholder="Email Address" />
                        </div>

                        {/*Email */}
                        <div className='form-group col-md-12'>
                            <p htmlFor="message">Your Message</p>
                            <textarea ref="message" type="text" style={{ maxWidth: '100%' }} rows="5" className="form-control"
                                name="message" placeholder="Your Message" />
                        </div>


                        {/*Submit */}
                        <div className='form-group col-md-12'>
                            <button onClick={this.sendMessage.bind(this)} type="submit" style={{ color: '#fff' }} className="btn btn-primary pull-right" >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='form-group col-md-12'></div>
                </div>
                <div className="col-md-6" style={{ paddingLeft: '40px' }}>

                    <div className="row">
                        <div ref="map" style={{ border: '1px solid #e5e3e3', height: '300px', width: '100%' }}></div>
                    </div>


                    <div>
                        <h2>Address</h2>
                        <p> </p>
                        <p><span className="glyphicon glyphicon-map-marker"></span> 2035, Rajiv Nagar, Sector 13, Gurugram, Haryana 122022, India</p>
                        <p><span className="glyphicon glyphicon-envelope"></span> rajeshkumar11cse@gmail.com</p>
                        <p><span className="glyphicon glyphicon-phone-alt"></span> +91 90 7126 2362</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;