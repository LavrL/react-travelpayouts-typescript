import * as React from 'react';
import './ButtonComponent.css';

interface ButtonComponentProps {
    text: string,
    onClick?: () => void
}

export class ButtonComponent extends React.Component<ButtonComponentProps, {}> {
    render() {
        return (
            < >
                <button className="ButtonComponent" onClick={this.props.onClick}>{this.props.text}</button>
            </>
        )
    }
}