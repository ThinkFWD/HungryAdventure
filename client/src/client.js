import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //wrap react-redux with provider
import Layout from './components/Layout';
import store from './store';
import { connect } from 'react-redux'; 
import Form from './components/searchFormComponent';
import actions from './actions/queryAction';

const SmartForm = connect(state => state, actions)(Form);
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
    <Layout /> 
    <SmartForm {...props}/>
    </Provider>, app)

