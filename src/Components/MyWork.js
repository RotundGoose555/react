import '../CSS/Body.css'
import {useState} from 'react';

function MyWork() {
    const [info, setInfo] = useState(<div></div>);

    const handleHover = event =>{
        document.getElementById('info').style.opacity =1;
        if(event.currentTarget.id === 'greenwood'){
            setInfo(
                <div>
                <h2>Greenwood Metals</h2>
                <p>The goal of this application is to provide a shop interface for Greenwood Silver, a small independent jeweler currently without a web presence. This site will allow users to better peruse Greenwood Metals available merchandise. Users can filter and sort by type of jewlery and cost as well as sort by date added. Finally users can add and remove items from a cart which calculates the total of their selected items. </p>
                </div>
            )
        }

        if(event.currentTarget.id === 'responsive'){
            setInfo(
                <div>
                <h2>Responsive Redesign</h2>
                <p>This page walks you through the steps of redesigning a website using the course pathways page from Brown University's Computer Science Department as an example. I chose this website because it's one I interact with often and often find it takes me a while to get the information I need.
                </p>
                </div>
            )
        }

        if(event.currentTarget.id === 'personas'){
            setInfo(
                <div>
                <h2>Personas</h2>
                <p>In developing user interfaces it's helpful for designers to put themselves in the shoes of those using the interface. This website walks through the process using CVS self-checkout machines as a case study. I've outlined the interface components below.
                </p>
                </div>
            )
        }

        if(event.currentTarget.id === 'stupid'){

            setInfo(
                <h2>This is a string about stupid</h2>
            )
        }

    }

    function handleLeave(){
        document.getElementById('info').style.opacity =0;
        setInfo(
            <div></div>
        )
    }






    return(
        <div className='my-work'>
            <div className='projects'>
            <a className='projects-text' id='greenwood' onMouseOver={handleHover} onMouseLeave={handleLeave} href='https://rotundgoose555.github.io/greenwood-metals/' target="_blank" rel="noopener noreferrer">GREENWOOD<br/> METALS</a>
            <a className='projects-text' id='responsive' onMouseOver={handleHover} onMouseLeave={handleLeave} href='https://rotundgoose555.github.io/responsive-design/' target="_blank" rel="noopener noreferrer">RESPONSIVE<br/>REDESIGN</a>
            <a className='projects-text' id='personas' onMouseOver={handleHover} onMouseLeave={handleLeave} href='https://rotundgoose555.github.io/persona-project//' target="_blank" rel="noopener noreferrer">PERSONAS</a>
            <a className='projects-text' id='stupid' onMouseOver={handleHover} onMouseLeave={handleLeave} href='https://rotundgoose555.github.io/greenwood-metals/' target="_blank" rel="noopener noreferrer">STUPID<br/>F**KING BIRD</a>
            </div>

            <div className='info'>
            <div id='info' className='info-box'>
            <p>{info}</p>
            </div> 
            </div>   


        </div>

        
    )
}

export default MyWork;