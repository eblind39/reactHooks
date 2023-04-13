import React, { useContext } from "react";
import { ThemeContext } from './themecontext'
import { ThemeStyles } from "../../types";

const Button = (props: any) => {
    const ctx: ThemeStyles = useContext(ThemeContext)

    const style = {
        border: '1px solid',
        borderRadius: 5,
        margin: '0 4px',
        color: ctx.color,
        backgroundColor: ctx.background,
    }

    return <button style={style} {...props} />
}

export default Button