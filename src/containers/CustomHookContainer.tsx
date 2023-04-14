import React from "react";
import WithNavBar from "../components/common/withnavbar";
import CustomHook from "../components/customHook";
 
const CustomHookContainer = () => {
    return <WithNavBar element={<CustomHook />} />
}

export default CustomHookContainer