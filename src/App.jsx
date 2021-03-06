import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from './components/navigation/Navigation';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import ConfigForm from './components/host/ConfigForm';
import localPackage from '../package.json';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.isLoading ? (
          <div>
            {this.props.errorMessage ? <ConfigForm /> : ''}
            <LoadingSpinner/>
          </div>
        ) : <Navigation/>}
        <footer>
          Staffing App {localPackage.version}
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
