import React from 'react';


class HelloWorld extends React.Component {

    render() {

        return (
            <div>
                <div>
                    < Square i={0}/>
                    <Square i={1}/>
                    <Square i={2}/>

                </div>
                <div>
                    <Square i={3}/>
                    <Square i={4}/>
                    <Square i={5}/>

                </div>
                <div>
                    <Square i={6}/>
                    <Square i={7}/>
                    <Square i={8}/>

                </div>
            </div>)
    }
}

class Square extends React.Component {
    constructor() {
        super();
        this.state = {num: ""}

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        this.setState({num: i})
    }
    render() {
        let {i} = this.props;
        let {num} = this.state
        return (
            <button
                style={{height: 22, width: 22}}

                onClick={() => this.handleClick(i)}>{num}</button>
        )

    }
}

export default HelloWorld;