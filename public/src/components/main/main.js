import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

class Main extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object.isRequired
};

export default Main;
