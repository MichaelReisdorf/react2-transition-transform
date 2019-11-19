import React from 'react'


class Header extends React.Component {
    constructor() {
        super();
        this.state = { Logo: 'SuperCode', style:{color:'red'} }
    }
    render() { 
        return ( 
            <h1>{this.state.Logo}</h1>
         );
    }
}
 
export default Header;


