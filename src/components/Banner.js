import React from 'react';

export default class Banner extends React.Component {

    constructor(props) {
    
        super(props);
        
    }

    render() {

        return( 
            <section>
                <div id="banner_container" class="banner">
                    <h2 className={ "banner_title banner_element stroked " + ( (this.props.mode == 'white') ? 'white' : 'black')} >
                        o1.
                    </h2>
                    <h3 className={ "banner_subtitle banner_element " + ( (this.props.mode == 'white') ? 'white' : 'black')} >
                        Bez kompromisu.
                        <br/>
                        Idealnie takie jak lubisz.
                    </h3>
                    <h4 className={ "banner_subtitle credits banner_element " + ( (this.props.mode == 'white') ? 'white' : 'black')} >
                        Keune <bold>Design</bold>
                    </h4>
                    <img className={ "banner_img " + ( (this.props.mode == 'white') ? 'hidden' : 'active')} 
                        src="/assets/img/slide2-big.jpg"></img>
                    <img className={ "banner_img " + ( (this.props.mode == 'white') ? 'active' : 'hidden')} 
                        src="/assets/img/slide1-big.jpg"></img>
                    <span className={ "grid_link banner_link uppercase " + ( (this.props.mode == 'white') ? 'white' : 'black')}  
                        onClick={this.props.changeBanner}> </span>
                </div>
            </section>
        );
    }
  
}