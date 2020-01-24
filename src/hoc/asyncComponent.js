import React, { Component } from 'react';

// This component helps to load other component asynchronusly only when component is needed.
const asyncComponent =  (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            // this function contains a component which must be loaded async. importComponent is a promise.
            importComponent()
                .then(cmp => {
                    // pass that component to state
                    this.setState({component: cmp.default});
                });      
        }

        render () {
            const C =this.state.component;

            // try to render component
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;