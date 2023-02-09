import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Grid from './Grid';

export default class Home extends React.Component {

    constructor() {
    
        super();
        this.state = {
            mode: 'white',
        };
        this.changeBanner = this.changeBanner.bind(this);
    
    }

    changeBanner(){
        this.setState({
            mode: ((this.state.mode == 'white') ? 'black' : 'white' )
        })
    }


    render() {
        return( 
            <div className="App">
                <Header mode={this.state.mode}></Header>
                <Banner changeBanner={this.changeBanner} mode={this.state.mode}></Banner>
                <Grid></Grid>
            </div>
        )
    }
}