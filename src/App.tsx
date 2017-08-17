import * as React from "react";

interface IAppProp {

}

interface IAppState {

}

class App extends React.Component<IAppProp, IAppState>{
    public render(): JSX.Element{
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}
export default App;