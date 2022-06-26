import React from 'react'



export default function cards(props) {
    return (

        <div className="my-3">
            <div className="card" style={{width: "25rem"}}>

            <img src={props.img}  className="card-img-top" />
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text"> {props.description}</p>
               
              </div>
            </div>
        
        
        // <>
            
        //     <div className="card" style={"width: 18rem"}>
        //         <img src={props.img} className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h5 className="card-title">{props.title}</h5>
        //             <p className="card-text">{props.description}</p>
        //             <a href={props.link} className="btn btn-primary">{props.btnname}</a>
        //         </div>
        //     </div>
        // </>
    )
}
