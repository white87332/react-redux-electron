import React from 'react';
import { Router, Route } from 'react-router';

// async load component
const loadContainerAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

export default function createRoutes(history)
{
    return (
        <Router history={history}>
    		<Route getComponent={loadContainerAsync(require('bundle?lazy&name=counter!../components/main/main'))} >
    			<Route path= "/" getComponent={loadContainerAsync(require('bundle?lazy&name=posts!../components/counter/counter'))} />
    			<Route getComponent={loadContainerAsync(require('bundle?lazy&name=layout!../components/layout/layout'))}>
    				<Route  path= "/posts" getComponent={loadContainerAsync(require('bundle?lazy&name=posts!../components/posts/posts'))} />
    				<Route  path= "/counter" getComponent={loadContainerAsync(require('bundle?lazy&name=counter!../components/counter/counter'))} />
    			</Route>
    		</Route>
        </Router>
    );
}
