import React, { Component, PropTypes } from 'react';
// import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/counter.js';

function mapStateToProps(state)
{
    return {
        numbers: state.counter.numbers
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(CounterActions, dispatch);
}

// @immutableRenderDecorator
class Counter extends Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        const
        {
            increment, incrementIfOdd, incrementAsync, decrement, numbers
        } = this.props;

        return (
            <div className="flexContainer">
            <div className="flexItem">
                <div className="inner">
                    Clicked: {numbers} times
                    {' '}
                    <button onClick={increment}>+</button>
                    {' '}
                    <button onClick={decrement}>-</button>
                    {' '}
                    <button onClick={incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={() => incrementAsync()}>Increment async</button>
                </div>
            </div>
            <div className="flexItem">
                <div className="inner">
                    Clicked: {numbers} times
                    {' '}
                    <button onClick={increment}>+</button>
                    {' '}
                    <button onClick={decrement}>-</button>
                    {' '}
                    <button onClick={incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={() => incrementAsync()}>Increment async</button>
                </div>
            </div>
            <div className="flexItem">
                <div className="inner">
                    Clicked: {numbers} times
                    {' '}
                    <button onClick={increment}>+</button>
                    {' '}
                    <button onClick={decrement}>-</button>
                    {' '}
                    <button onClick={incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={() => incrementAsync()}>Increment async</button>
                </div>
            </div>
            </div>
        );
    }
}

Counter.propTypes = {
    increment      : PropTypes.func.isRequired,
    incrementIfOdd : PropTypes.func.isRequired,
    incrementAsync : PropTypes.func.isRequired,
    decrement      : PropTypes.func.isRequired,
    numbers        : PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
