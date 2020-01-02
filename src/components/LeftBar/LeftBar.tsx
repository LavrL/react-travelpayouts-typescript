import * as React from 'react';
import t_letterPath from '../../assets/t_letter.svg';
import icon_circle from '../../assets/icon_circle.svg';
import './LeftBar.css';

interface LeftBarProps {
}

export class LeftBar extends React.Component<LeftBarProps, {}> {
    render() {
        let icon_circle_arr = [];
        for (let i = 0; i < 8; ++i) {
            icon_circle_arr.push(
            <div className="LeftBar__icon-circle">
                <img key={i} src={icon_circle} alt="circle" />
            </div>)
        }

        return (
            <div className="LeftBar">
                <div className="LeftBar__t-letter">
                    <img src={t_letterPath} alt="logo" />
                </div>
                <div className="LeftBar__icon-circle">
                    {icon_circle_arr}
                </div>
            </div>
        )
    }
}