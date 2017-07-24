import React from 'react';
class Debugging extends React.Component {
    render() {
        return (
            <div>
                <article>
                    <div className="col-md-12">
                        <a href="#/nodejs/debugging" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                         {/*<a href="#/nodejs/eventEmitters" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Node.js EventEmitter</h2>
                            <p>
                                Node.js allows us to create and handle custom events easily by using <a href="https://nodejs.org/api/events.html">events</a> module. 
                                Event module includes EventEmitter class which can be used to raise and handle custom events.
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>What is EventEmitter Class?</h2>
                            <p>
                                EventEmitter class is a class which is present in the “events” module of Node.js. It can be accessed in 
                                the following way.
                            </p>
                            <p className="text-code">
                                <p>
                                    <span style={{ color: 'grey' }}>// Import the events module</span><br></br>
                                    <span style={{ color: 'blue' }}>var</span> eventsInstance = <span style={{ color: 'green' }}>require</span>("<span style={{ color: 'red' }}>events</span>");</p>
                                <p>
                                    <span style={{ color: 'grey' }}>// Create an eventEmitter instance</span><br></br>
                                    <span style={{ color: 'blue' }}>var</span> 
                                eventEmitter = <span style={{ color: 'blue' }}>new </span> 
                                <span style={{ color: 'green' }}>eventsInstance</span>.EventEmitter();</p>
                            </p>
                            <p>
                               Whenever an EventEmitter instance surfaces any error, then it immediately emits an ‘error’ event.
                            </p>
                              <p>
                               Firstly, we are importing the required module by using the required directive “events” in order to load the “events” 
                               module and storing the returned “events” instance into an eventsInstance variable.
                            </p>
                            <p>
                              Next, we are creating an eventEmitter instance by using ‘eventsInstance.EventEmitter ()’
                              where the instance is returned into eventEmitter variable as shown above.
                            </p>
                        </p>

                         <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>What is Event Driven in node.js?</h2>
                            <p>
                                It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits 
                                for event to occur. It is the one of the reason why Node.js is pretty fast compared to other similar technologies.
                            </p>
                            <p>
                                There is a main loop in the event driven application that listens for events, and 
                                then triggers a callback function when one of those events is detected.
                            </p>
                            <img className="thumbnail" width="100%" src="./img/event_emitter.svg" alt="Image Error" />
                        </p>
                         <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Example</h2>
                            <p>
                               Lets’ understand the ‘events.EventEmitter’ class methods and 
                               events in the best way with the help of the following demo example.
                            </p>
                             <img className="thumbnail" width="100%" src="./img/event_emitter2.png" alt="Image Error" />

                             <ul>  
                                 <li>
                                    Firstly, we are importing the required module by using the required directive “events” in order to load 
                                 the “events” module and store the returned “events” instance into an eventsInstance variable as shown above
                                 </li><br/>
                                 <li>
                                     Next, we are creating an eventEmitter instance by using the ‘eventsInstance.EventEmitter ()’ where the instance 
                                     is returned into eventEmitter variable as shown above.
                                 </li><br/>
                                 <li>
                                     Then, we will create two event listener functions namely ‘ListenerFunction1’ and ‘ListenerFunction2’.
                                 </li><br/>
                                 <li>
                                     After that, we will bind the <strong>myEvent</strong> event with the ‘ListenerFunction1’ and ‘ListenerFunction2’ functions.
                                 </li><br/>
                                 <li>
                                     Next, we will fire the <strong>myEvent</strong> event.
                                 </li><br/>
                                 <li>
                                     Then, we will remove the binding for the ‘ListenerFunction1’ and will again fire the <strong>myEvent</strong> event.
                                 </li><br/>
                                 <li>
                                     Lastly, we will log a predefined message ‘Program execution completed successfully…’ on to the console.
                                 </li>
                             </ul>
                             <p>
                                 <strong>Output</strong><br/>
                                 When we execute the code present in above file by using the node command, we can observe the following output.
                             </p>
                             <p className="text-code">
                                <p>2 Listener(s) are listening to the myEvent event</p>
                                <p>Execution completed for the Listener no. 1</p>
                                <p>Execution completed for the Listener no. 2</p>
                                <p>Listener function 1 will stop listen now.</p>
                                <p>Execution completed for the Listener no. 2</p>
                                <p>1 Listener(s) are listening to myEvent event</p>
                                <p>Program execution completed successfully...</p>
                            </p>
                        </p>
                        <p className="totorial_question">
                            <h2 style={{ color: '#605e5e' }}>Methods</h2>
                            <p>
                                The following table lists all the methods of EventEmitter class.
                            </p>
                            <table className="code-table">
                                <thead>
                                    <tr>
                                        <td><strong>EventEmitter Methods</strong></td>
                                        <td><strong>Description</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                        <td>emitter.addListener(event, listener)</td>
                                        <td>This Adds or push a listener to the listeners array for the specified event. 
                                            This does not checks that if the listener has already added. 
                                            It can also be called as an alias of emitter.addListener()</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.on(event, listener)</td>
                                        <td>This Adds or push a listener to the listeners array for the specified event. 
                                            This does not checks that if the listener has already added. 
                                            It can also be called as an alias of emitter.addListener()</td>
                                    </tr>
                                     <tr>
                                        <td>emitter.once(event, listener)</td>
                                        <td>Adds a one time listener for the event. This listener 
                                            is invoked only the next time the event is fired, after which it is removed.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.removeListener(event, listener)	</td>
                                        <td>Removes a listener from the listener array for the specified event. 
                                            Caution: changes array indices in the listener array behind the listener.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.removeAllListeners([event])</td>
                                        <td>Removes all listeners, or those of the specified event.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.setMaxListeners(n)</td>
                                        <td>By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.getMaxListeners()</td>
                                        <td>Returns the current maximum listener value for the emitter which is either 
                                            set by emitter.setMaxListeners(n) or defaults to EventEmitter.defaultMaxListeners.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.listeners(event)</td>
                                        <td>Returns a copy of the array of listeners for the specified event.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.emit(event[, arg1][, arg2][, ...])	</td>
                                        <td>Raise the specified events with the supplied arguments.</td>
                                    </tr>
                                    <tr>
                                        <td>emitter.listenerCount(type)</td>
                                        <td>Returns the number of listeners listening to the type of event.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                        <a href="#/nodejs/debugging" className="btn btn-default btn-sm next-pre-btn ">{'<<'} Pre Page</a>
                        {/*<a href="#/nodejs/eventEmitters" className="pull-right btn btn-default btn-sm next-pre-btn ">Next Page >></a>*/}
                    </div>
                </article>
            </div>
        )
    }
}

export default Debugging;