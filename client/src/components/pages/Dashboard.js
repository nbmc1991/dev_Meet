import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import DevCards from './DevCards';
import SwipeButtons from './SwipeButtons';
import API from '../../utils/apiHelper';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: '30vh' }}>
      <div className="row">
        <div className="col s12 center-align">

          <button
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }
            }
            onClick={onLogoutClick}>
            Logout
          </button>
           <DevCards />
        </div>
      </div>
      <SwipeButtons />
    </div>
  );
};

export default Dashboard;
