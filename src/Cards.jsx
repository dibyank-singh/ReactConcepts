import React from 'react'
function Card (props){
  
    return (
        <>

        <div ClassName="Card">
        
            <div ClassName="cards">
                < img src={props.imgsrc} />
                <div ClassName="classinfo">
                    <span ClassName="category" >{props.tital}</span>
                    <h3 ClassName="class_title">{props.Mname}</h3>
                    <a href={props.link} target="blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card ;