import React, { useState, useEffect, useDebugValue } from "react";
import { LabelRecord } from "../types";
import { myApi } from "../../data/myApi";
import StandardUse from "./standard";
import LifeCycle from "./lifecycle";
import Subscription from "./subscriptions";

const UseEffect = () => {
    return (
        <React.Fragment>
            <h3>useEffect</h3>

            < br/>

            <StandardUse />

            <LifeCycle />

            <Subscription />
        </React.Fragment>
    )
}

export default UseEffect