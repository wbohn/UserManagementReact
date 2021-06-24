import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { UsersRouter } from './components/users/UsersRouter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';


import './custom.css'

export default class App extends React.Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/counter' component={Counter} />
				<AuthorizeRoute path='/fetch-data' component={FetchData} />
				<AuthorizeRoute path='/users' component={UsersRouter} />
				<Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
			</Layout>
		);
	}
}
