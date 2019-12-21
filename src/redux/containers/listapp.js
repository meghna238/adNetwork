import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { applicationCount,applicationPGData,deleteApp,searchApplicationData} from '../actions/createapp';
import ListApp from '../../views/Listapp/listapp';

class ListAppContainer extends Component {
    
    transferToDashboardIfLoggedIn(){
        if (!this.props.auth.auth_data.access_token){
            this.props.history.push(this.props.from || {pathname: '/login'});
        }
    }

    componentWillMount() {
        this.transferToDashboardIfLoggedIn();
    }
    
    componentDidUpdate() {        
        this.transferToDashboardIfLoggedIn();
    }

    componentDidMount() {
        // this.props.getUserRole();
    }

    render() {
      const {auth ,applicationCount,applicationPGData,deleteApp,searchApplicationData} = this.props;
      return (
        <ListApp auth={auth} applicationCount={applicationCount} applicationPGData={applicationPGData} deleteApp={deleteApp} searchApplicationData={searchApplicationData} />
      );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    applicationCount:(obj) => dispatch(applicationCount(obj)),
    applicationPGData:(data) => dispatch(applicationPGData(data)),
    deleteApp:(data) => dispatch(deleteApp(data)),
    searchApplicationData:(data) => dispatch(searchApplicationData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListAppContainer));