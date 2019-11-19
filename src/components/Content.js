import React from 'react'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style:{color: "blue", textShadow: 'black 2px 2px', fontSize: '26px', transform: 'scale(1)',  transition: '10s all'}}
    }
    changeColor = () => {
        this.setState({style:{color: "red"}})
        if (this.state.style.color === 'blue'){
            this.setState({style:{color: "red", textShadow: 'black 1px 1px', backgroundColor: 'gray', transform: 'scale(1)',  transition: '10s all'}})
        } else {
            this.setState({style:{color: 'blue',textShadow: 'gray 2px 2px',fontSize: '26px', transform: 'skew(3deg, 3deg)',  transition: '5s all'}})
        }
    }
    render() { 
        return ( 
        <div>
        <p style= {this.state.style}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <button  type="button"  onClick={this.changeColor}>click mich</button>
        </div>
        );
    }
}
 
export default Content;