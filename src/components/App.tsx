import * as React from 'react';
import './App.css';
import { LeftBar } from '../components/LeftBar/LeftBar';
import { MainComponent } from '../components/MainComponent/MainComponent';

interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="App">
                <LeftBar />
                <MainComponent />
            </div>
        )
    }
}