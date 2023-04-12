import React from "react";
import App from "../App";
import WithNavBar from "../components/common/withnavbar";

const HomeContainer = () => {
    return <WithNavBar element={<App />} />
}

export default HomeContainer