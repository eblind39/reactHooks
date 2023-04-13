import React, { useEffect, useState } from "react";
import InitialIssueReducer from './initialissue'
import WithReducer from "./withreducer";

const UseReducer = () => {
    return (
        <React.Fragment>
            <h3>useReducer</h3>

            <br />

            <InitialIssueReducer />

            <WithReducer />
        </React.Fragment>
    )
}

export default UseReducer