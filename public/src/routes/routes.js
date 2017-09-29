import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from '../components/main/main';
import asyncComponent from '../utils/asyncComponent';

export default function createRoutes()
{
    return (
        <HashRouter>
            <Main>
                <Switch>
                    <Route exact path="/" component={asyncComponent(() => System.import('../containers/counter/counter').then(module => module.default))} />
                </Switch>
            </Main>
        </HashRouter>
    );
}
