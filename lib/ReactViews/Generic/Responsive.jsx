import React from "react";
import MediaQuery from "react-responsive";

// This should come from some config some where
const small = 768;
const medium = 992;
const large = 1200;

export function ExtraSmall(props) {
    return <MediaQuery maxWidth={small}>{props.children}</MediaQuery>;
}

export function Small(props) {
    return <MediaQuery maxWidth={medium - 1}>{props.children}</MediaQuery>;
}

export function Medium(props) {
    return <MediaQuery minWidth={medium}>{props.children}</MediaQuery>;
}

export function Large(props) {
    return (
        <MediaQuery minWidth={large} component="div">
            {props.children}
        </MediaQuery>
    );
}
