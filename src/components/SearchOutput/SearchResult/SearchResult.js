import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (

<article className={classes.Result}>
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
    <h3>{props.bodyText}</h3>
</article>
    );
}

export default SearchResult;