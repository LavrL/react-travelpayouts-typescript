import * as React from 'react';
import './MainComponent.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import i18n from "i18next";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import langEng from '../../assets/en.json';
import langRu from '../../assets/ru.json';

interface MainComponentProps {
}

interface BonusesData {
    title: string,
    description: string,
    link: string,
    promocode: string
}
interface IMainComponentState {
    bonuses: BonusesData[],
    serviss: string,
    balance: number,
    next_payout: number,
    balanceTitle: string
}

export class MainComponent extends React.Component<MainComponentProps, IMainComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            serviss: '',
            bonuses: [],
            balance: 0,
            next_payout: 0,
            balanceTitle: i18n.t('Pages.translation.balance')
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.getPromocodes = this.getPromocodes.bind(this)
        this.clearInput = this.clearInput.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeHandler(event: any) {
        this.setState({ serviss: event.target.value });
    }
    clearInput() {
        console.log('Clearing ...');
        this.setState({
            serviss: ''
        });
    }
    componentDidMount() {
        this.getPromocodes();
    }
    changeLanguage(lang: string) {
        i18n.changeLanguage(lang).then( ()=>{
            i18n.options.lng = lang;
            i18n.t('key');
            this.setState({
                balanceTitle: i18n.t('Pages.translation.balance')
            })
        });
    }
    getPromocodes() {
        fetch('/assets/data.json')
            .then(response => {
                if (!response.ok) {
                    console.log('Error +', response.status)
                }
                return response.json()
            })
            .then(bonuses => {
                this.setState({
                    bonuses: bonuses.bonuses as BonusesData[],
                    balance: bonuses.header.balance,
                    next_payout: bonuses.header.next_payout
                })
                console.log('bonuses - ', this.state.bonuses);
                console.log('bonuses.header.balance - ', this.state.balance);
                console.log('bonuses.header.next_payout - ', this.state.next_payout);
            }
            )
            .catch(error => {
                console.log('Error = ', error);
            });
    }

    render() {
        //const {t } = this.props;
        return (
            <div className="MainComponent">
                <div className="MainComponent__title">
                    <ul className="MainComponent__title-list">
                        <li className="MainComponent__title-item">
                            <p className="MainComponent__title-item-balanss">
                            {this.state.balanceTitle}
                            </p>
                            <p className="MainComponent__title-item-price">{this.state.balance} ₽</p>
                        </li>
                        <li className="MainComponent__title-item">
                            <p className="MainComponent__title-item-balanss">К выплате</p>
                            <p className="MainComponent__title-item-price">{this.state.next_payout} ₽</p>
                        </li>
                    </ul>
                    <div>
                        <button onClick={() => this.changeLanguage('ru')}>ru</button>
                        <button onClick={() => this.changeLanguage('en')}>en</button>
                    </div>
                </div>
                <div className="MainComponent__MainMenu">
                    <p className="MainComponent__MainMenu_title">
                        Сервисы
                    </p>
                    <span className="MainComponent__MainMenu_filtr">Фильтр</span>
                    <div className="MainComponent__MainMenu_form2">
                        <form className="MainComponent__MainMenu_form">
                            <input className="MainComponent__MainMenu_form-input"
                                type="text"
                                onChange={this.changeHandler}
                                value={this.state.serviss} />
                        </form>
                        <ButtonComponent text="Сбросить"
                            onClick={this.clearInput} />
                    </div>
                    {this.state.bonuses.filter(bonus => bonus.title.toLowerCase().startsWith(this.state.serviss))
                        .map((bonus, i) => {
                            return <SearchComponent key={i}
                                title={bonus.title}
                                description={bonus.description}
                                link={bonus.link}
                                promocode={bonus.promocode} />
                        })}
                </div>

            </div >
        )
    }
}

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div>
            <button onClick={() => changeLanguage('de')}>de</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
}