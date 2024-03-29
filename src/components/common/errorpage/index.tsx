import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error: any = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has ocurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;