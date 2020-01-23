import * as React from 'react';

import './SearchComponent.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import icon_copy from '../../assets/copy_icon.svg';

interface SearchComponentProps {
    key: number,
    title: string
    description: string,
    link: string,
    promocode: string,
    buttonText: string,
    promocodeTitle: string
}

export class SearchComponent extends React.Component<SearchComponentProps, {}> {
    constructor(props: any) {
        super(props);

        this.copyToClipBoard = this.copyToClipBoard.bind(this);
    }
    copyToClipBoard(txt: string) {
        console.log(txt);
        var textField = document.createElement('textarea')
        textField.innerText = txt;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    render() {
        return (
            <div className="SearchComponent">
                <div className="SearchComponent__item">
                    <div className="SearchComponent__info">
                        <p className="SearchComponent__title">{this.props.title}</p>
                        <span className="SearchComponent__description">{this.props.description}</span>
                    </div>
                    <div>
                        <span className="SearchComponent__promocode">{this.props.promocodeTitle}</span>
                        <div className="SearchComponent__discount">
                            <div className="SearchComponent__promo">
                                <input className="SearchComponent__promocode_input" type="text" defaultValue={this.props.promocode} id="#promo" />
                                <button onClick={() => this.copyToClipBoard(this.props.promocode)} className="SearchComponent__promocode_input-icon_copy">
                                    <img src={icon_copy} /></button>
                            </div>
                            <ButtonComponent text={this.props.buttonText} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}