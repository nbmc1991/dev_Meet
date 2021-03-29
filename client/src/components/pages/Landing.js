import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
        <h4>
            <p className="flow-text grey-text text-darken-1">
              Swipe Right to CONNECT. Swipe Left to see NEXT.{' '} <span style={{ fontFamily: 'monospace' }}>dev-Meet.</span> 
            </p>
          </h4>
          <p className="flow-text grey-text text-darken-1">
            Make lasting connections with Developers like you!
          </p>
          <br />
          <div className="col s6">
            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
