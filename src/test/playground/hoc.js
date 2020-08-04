import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {!props.isAuthenticated && <h1>Please login to view the info</h1>}
        {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info = 'go to hell'/>, document.getElementById('app'));