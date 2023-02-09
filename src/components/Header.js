import { getElementError } from '@testing-library/react';
import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
    
        super(props);
        
        this.state = {
			menu_shown: false,
            header_menu: {
                'Nowości'  : '#',
                'Produkty' : {
						'Produkt 1' : '#',
						'Produkt 2' : '#',
						'Produkt 3' : '#'
                },
                'Trendy'   		: '#',
                'O firmie' 		: '#',
                'Salony'   		: '#',
                'Dystrybutorzy'	: '#',
                'Kontakt'		: '#'
            }
        }
    
    }
    
	getClickableElement(link, name){
		return(
			<a href={link}>{name}</a>
		)
	}

	getSubMenu(menu, name){
		return(
			<li class="header_menu__parent">
				<span>{name}</span>
				<ul class="header_menu__submenu" >
					{ 
						Object.keys(menu).map(function(element){
							return (
								<li>
									<a href={menu[element]}>{element}</a>
								</li>
							)
						})
					}
				</ul>
			</li>
		)
	}

	changeMenuState(){
		this.setState({
			menu_shown: !this.state.menu_shown
		})
	}

    render() {
		const header_menu = this.state.header_menu;
		const parent = this;

        return( 
            <header className={ "header flex_box space_between " + ( (this.props.mode == 'white') ? 'white' : 'black')}>
                    <div id="logo" 
                        className={ "header_image " + ( (this.props.mode == 'white') ? 'white' : 'black')}>
                    </div>
                    <div className={ "header_menu " + ( (this.state.menu_shown) ? 'show' : 'hidden')}>
                        <ul>
						{ Object.keys(this.state.header_menu).map(function(element){ 
							return (
								(typeof header_menu[element] !== 'object') ?  
									parent.getClickableElement(header_menu[element], element) 
								:
									parent.getSubMenu(header_menu[element], element)
								)
							})
						}
                        </ul>

                    </div>
				<div className={ "header_icons " + ( (this.props.mode == 'white') ? 'white' : 'black')}>
					<div class="header_icon">
						<a id="twitter" href="#"></a>
					</div>
					<div class="header_icon column">
						<a id="fb" href="#"></a>
						<a id="ig" href="#"></a>
					</div>
					<div class="header_icon">
						<a id="yt" href="#"></a>
					</div>
				</div>
				<div id="hamburger" 
					onClick={() => this.changeMenuState()}
					className={ "mobile " + ( (this.state.menu_shown) ? 'clicked' : 'active') + ( (this.props.mode == 'white') ? ' white' : ' black')} >

				</div>
            </header>
            );
        }
  
}