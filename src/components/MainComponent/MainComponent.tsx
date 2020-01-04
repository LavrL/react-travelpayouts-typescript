import * as React from 'react';
import './MainComponent.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { SearchComponent } from '../SearchComponent/SearchComponent';

interface MainComponentProps {
}

export class MainComponent extends React.Component<MainComponentProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            serviss: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.getPromocodes = this.getPromocodes.bind(this)
    }
    changeHandler(event: any) {
        this.setState({ serviss: event.target.value })
    }
    componentDidMount() {
        this.getPromocodes();
    }
    getPromocodes() {
        // fetch('/assets/data.json')
        // .then(response => {
        //     if (!response.ok) {
        //         console.log('Error +', response.status)
        //     }
        //     return response.json()
        // })
        // .then(json => )
    }

    render() {
        return (
            <div className="MainComponent">
                <div className="MainComponent__title">
                    <ul className="MainComponent__title-list">
                        <li className="MainComponent__title-item">
                            <p className="MainComponent__title-item-balanss">Баланс</p>
                            <p className="MainComponent__title-item-price">213 920 ₽</p>
                        </li>
                        <li className="MainComponent__title-item">
                            <p className="MainComponent__title-item-balanss">К выплате</p>
                            <p className="MainComponent__title-item-price">159 465 ₽</p>
                        </li>
                    </ul>
                </div>
                <div className="MainComponent__MainMenu">
                    <p className="MainComponent__MainMenu_title">
                        Сервисы
                    </p>
                    <span className="MainComponent__MainMenu_filtr">Фильтр</span>
                    <div className="MainComponent__MainMenu_form2">
                        <form className="MainComponent__MainMenu_form">
                            <input className="MainComponent__MainMenu_form-input" type="text" onChange={this.changeHandler} />
                        </form>
                        <ButtonComponent text="Сбросить" />
                    </div>
                    <SearchComponent />
                </div>

            </div >
        )
    }
}