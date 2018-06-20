import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login';
import LandingPage from './components/landing-page';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';

class RouterComponent extends React.Component {
    
//   componentDidUpdate(prevProps) {
//     if (!prevProps.loggedIn && this.props.loggedIn) {
//         // When we are logged in, refresh the auth token periodically
//         this.startPeriodicRefresh();
//     } else if (prevProps.loggedIn && !this.props.loggedIn) {
//         // Stop refreshing when we log out
//         this.stopPeriodicRefresh();
//     }
//   }

//   componentWillUnmount() {
//       this.stopPeriodicRefresh();
//   }


//   startPeriodicRefresh() {
//       this.refreshInterval = setInterval(
//           () => this.props.dispatch(refreshAuthToken()),
//           59 * 60 * 1000 // One hour
//       );
//   }

//   stopPeriodicRefresh() {
//       if (!this.refreshInterval) {
//           return;
//       }
//       clearInterval(this.refreshInterval);
//   }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="landingPage" component={LandingPage} title="landingPage" hideNavBar/>
                    <Scene key="login" component={Login} title="login" hideNavBar />
                    <Scene key="navigation" component={Navigation} title="navigation" hideNavBar/>     
                    <Scene key="dashboard" component={Dashboard} title="dashboard" hideNavBar/>        
                </Scene>
            </Router>
        );
    }

}


const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
})

export default (connect(mapStateToProps)(RouterComponent))

// export default RouterComponent;