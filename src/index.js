import {
  register
} from 'riot'

import Button from './material-elements/material-button/material-button.riot';
// import Card from './material-elements/material-card/material-card.riot';
// import Checkbox from './material-elements/material-checkbox/material-checkbox.riot';
// import Combo from './material-elements/material-combo/material-combo.riot';
import Dropdown from './material-elements/material-dropdown/material-dropdown.riot';
import DropdownList from './material-elements/material-dropdown-list/material-dropdown-list.riot';
import Input from './material-elements/material-input/material-input.riot';
import Navbar from './material-elements/material-navbar/material-navbar.riot';
import Pane from './material-elements/material-pane/material-pane.riot';
// import Popup from './material-elements/material-popup/material-popup.riot';
// import Snackbar from './material-elements/material-snackbar/material-snackbar.riot';
// import Spinner from './material-elements/material-spinner/material-spinner.riot';
// import Tabs from './material-elements/material-tabs/material-tabs.riot';
// import TextArea from './material-elements/material-textarea/material-textarea.riot';
import Waves from './material-elements/material-waves/material-waves.riot';
// import Footer from './material-elements/material-footer/material-footer.riot';

import './material-elements/material-button/material-button.scss';
import './material-elements/material-card/material-card.scss';
import './material-elements/material-checkbox/material-checkbox.scss';
import './material-elements/material-combo/material-combo.scss';
import './material-elements/material-dropdown/material-dropdown.scss';
import './material-elements/material-dropdown-list/material-dropdown-list.scss';
import './material-elements/material-input/material-input.scss';
import './material-elements/material-navbar/material-navbar.scss';
import './material-elements/material-pane/material-pane.scss';
import './material-elements/material-popup/material-popup.scss';
import './material-elements/material-snackbar/material-snackbar.scss';
import './material-elements/material-spinner/material-spinner.scss';
import './material-elements/material-tabs/material-tabs.scss';
import './material-elements/material-textarea/material-textarea.scss';
import './material-elements/material-waves/material-waves.scss';
import './material-elements/material-footer/material-footer.scss';

register('material-button', Button);
register('material-dropdown', Dropdown);
register('material-dropdown-list', DropdownList);
register('material-input', Input);
register('material-navbar', Navbar);
register('material-pane', Pane);
register('material-waves', Waves);