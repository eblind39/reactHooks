import React from "react";
import App from "../App";
import WithNavBar from "../components/withnavbar";

const HomeContainer = () => {
    return <WithNavBar element={<App />} />
}

export default HomeContainer