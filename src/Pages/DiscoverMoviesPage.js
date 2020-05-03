import React from "react";
import { useRouteMatch } from "react-router-dom";


export default function () {
    const match = useRouteMatch()
    console.log("Hello from Movies page", match)
return <h1>{match.params.moveId}</h1>
}