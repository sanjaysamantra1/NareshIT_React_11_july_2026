import React, { Component } from 'react'

export default class CounterDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    incremenet = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return <>
            <h1>Counter Example</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incremenet}>Increment</button>
        </>
    }
}
