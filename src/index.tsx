import "./css/style.scss";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import i18n from "i18next";
import '../src/assets/i18n.tsx';
import { App } from './components/App';

ReactDOM.render(<App/>, document.getElementById("root"));
