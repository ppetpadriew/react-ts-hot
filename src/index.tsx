import * as React from "react";
import * as ReactDOM from "react-dom";
const { AppContainer } = require("react-hot-loader");
import App from "./App";

declare global {
    interface NodeModule {
        hot: {
            accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
            accept(dependency: string, callback: () => void): void;
            accept(errHandler?: (err: any) => void): void;
            decline(dependencies: string[]): void;
            decline(dependency: string): void;
            decline(): void;

            dispose(callback: (data: any) => void): void;
            addDisposeHandler(callback: (data: any) => void): void;

            removeDisposeHandler(callback: (data: any) => void): void;
        }
    }
}

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

