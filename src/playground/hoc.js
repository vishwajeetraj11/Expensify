// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Pops manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( 
        <div>
            
            { props.isAdmin && <p>This is private Info. Please dont share!</p>}
        <WrappedComponent {...props} />
        </div>
    );
};

const withAuthWarning = (WrappedComponent) => {
return (props) => (
        (
        <div>    
        { props.isAuth && (
            <div>
            <p>This is private Info. Please dont share!</p>
            <WrappedComponent {...props} />
            </div>
            )}
        {props.isAuth === false ? <p>Please Login to continue!</p> : undefined }

        </div>
        )
)
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="This is some info"/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuth={false} info="This is some info"/>, document.querySelector('#app'));

// { props.isAuth && } 
