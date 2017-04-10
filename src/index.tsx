import * as React from "react";
import * as ReactDOM from "react-dom";
const { AppContainer } = require("react-hot-loader");
import App from "./App";

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById("root"));

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept("./App", () => {

        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require("./App").default;

        // And render it into the root element again
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById("root")
        );
    })
}

