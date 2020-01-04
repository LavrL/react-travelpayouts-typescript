import * as React from 'react';
import './ButtonComponent.css';

interface ButtonComponentProps {
    text: string
}

export class ButtonComponent extends React.Component<ButtonComponentProps, {}> {
    render() {
        return (
            < >
                <button className="ButtonComponent">{this.props.text}</button>
            </>
        )
    }
}