import React from 'react';
class Home extends React.Component {
        activeLink(eventKey){
            localStorage.setItem('activeLink', eventKey)
        }

    render() {
        return (
            <div>
                <div className="col-md-6">
                    <a href="#/nodejs/home" onClick={this.activeLink.bind(this, 2)}>
                        <img className="col-md-12 thumbnail" src="./img/nodejs.jpg" alt=""/>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href="#/nodejs/home">
                    <img className="col-md-12 thumbnail" src="./img/reactjs.jpg" alt=""/>
                        </a>
                </div>

                <div className="col-md-6">
                    <a href="#/nodejs/home">
                    <img className="col-md-12 thumbnail" src="./img/mongodb.jpg" alt=""/>
                        </a>
                </div>

                <div className="col-md-6">
                    <a href="#/nodejs/home">
                    <img className="col-md-12 thumbnail" src="./img/angularjs.jpg" alt=""/>
                        </a>
                </div>
            </div>
        )
    }
}

export default Home;