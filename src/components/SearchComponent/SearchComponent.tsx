import * as React from 'react';

import './SearchComponent.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import icon_copy from '../../assets/copy_icon.svg';

interface SearchComponentProps {
    // title: string,
    // description: string,
    // link: string,
    // promocode: string
}

export class SearchComponent extends React.Component<SearchComponentProps, {}> {
    render() {

        return (
            <div className="SearchComponent">
                <div className="SearchComponent__item">
                    <div className="SearchComponent__info">
                        <p className="SearchComponent__title">Nethouse</p>
                        <span className="SearchComponent__description">Описание</span>
                    </div>
                    <div className="SearchComponent__discount">
                        <div className="SearchComponent__promo">
                            <span className="SearchComponent__promocode">Промокод</span>
                            <input className="SearchComponent__promocode_input" type="text" defaultValue="Travelpayouts" />
                            <a href="#"> <img className="SearchComponent__promocode_input-icon_copy" src={icon_copy} alt="icon_copy" /></a>
                        </div>
                        <ButtonComponent text="Получить бонус" />
                    </div>
                </div>
            </div>
        )
    }
}