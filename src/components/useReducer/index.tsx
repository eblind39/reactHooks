import React, { useEffect, useState } from "react";
import InitialIssueReducer from './initialissue'
import WithReducer from "./withreducer";
import ToDo from "./todo";

const UseReducer = () => {
    return (
        <React.Fragment>
            <h3>useReducer</h3>

            <br />

            <InitialIssueReducer />

            <WithReducer />

            <ToDo />
        </React.Fragment>
    )
}

export default UseReducer