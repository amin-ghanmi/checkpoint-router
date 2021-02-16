import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Description = ({ match, moviesList }) => {
    return ( < div className = "desc" > {
            movietab
            .filter((el) => el.Title === match.params.title)
            .map((el, index) => ( <
                div key = { index } >
                <
                iframe width = "727"
                height = "409"
                src = { el.Trailer }
                frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen >
                <
                /iframe> <
                h6 className = "des" > { el.Description } < /h6>  <
                Link to = '/' > < Button variant = "success" > go back < /Button></Link >
                <
                /div>
            ))
        } <
        /div>
    );
};

export default Description;