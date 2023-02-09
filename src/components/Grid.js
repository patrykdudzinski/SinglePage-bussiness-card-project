import React from 'react';

export default class Grid extends React.Component {

    constructor(props) {
    
        super(props);
    
    }

    render() {

        return( 
            <section>
                <div class="parent">
                    <div class="div1 grid_text">
                        <h2 class="black grid_title grid_title stroked">o2.</h2>
                        <h2 class="black grid_subtitle uppercase">Marki <br/> Keune</h2>
                    </div>
                    <div class="div2 grid_img" style={{ backgroundImage: "url(" + '/assets/img/01_care.jpg' + ")"}} >
                        <div class="grid_content">
                            <h2 class="uppercase white grid_subtitle"> Keune <br/> Care </h2>
                            <a href="#" class="grid_link uppercase white"> Odkryj siebie </a>
                        </div>
                    </div>
                </div> 
                <div class="parent">
                    <div class="div1 grid_img"
                        style={{ backgroundImage: "url(" + '/assets/img/02_design.jpg' + ")"}}> 
                        <div class="grid_content column">
                            <h2 class="uppercase white grid_subtitle"> Keune <br/> Design </h2>
                            <a href="#" class="grid_link uppercase white"> Odkryj siebie </a>
                        </div>
                    </div>
                    <div class="div2 grid_img"
                        style={{ backgroundImage: "url(" + '/assets/img/03_blend_1.jpg' + ")"}} > 
                        <div class="grid_content">
                            <h2 class="uppercase white grid_subtitle"> Keune <br/> Blend </h2>
                            <a href="#" class="grid_link uppercase white"> Odkryj siebie </a>
                        </div>
                    </div>
                </div> 
                <div class="parent inverted">
                    <div class="div1 grid_img"
                        style={{ backgroundImage: "url(" + '/assets/img/05_so_pure.jpg' + ")"}}> 
                        <div class="grid_content column">
                            <h2 class="uppercase white grid_subtitle"> Keune <br/> So Pure </h2>
                            <a href="#" class="grid_link uppercase white"> Odkryj siebie </a>
                        </div>
                    </div>
                    <div class="div2 grid_img" style={{ backgroundImage: "url(" + '/assets/img/04_koloryzacja.jpg' + ")"}} >
                        <div class="grid_content">
                            <h2 class="uppercase white grid_subtitle"> Keune <br/> Koloryzacja </h2>
                            <a href="#" class="grid_link uppercase white"> Odkryj siebie </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
  
}