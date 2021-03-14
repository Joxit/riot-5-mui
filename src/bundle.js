import {
  register
} from 'riot'

import * as mui from './';

import './material-elements/material-button/material-button.scss';
import './material-elements/material-card/material-card.scss';
import './material-elements/material-checkbox/material-checkbox.scss';
import './material-elements/material-combo/material-combo.scss';
import './material-elements/material-dropdown/material-dropdown.scss';
import './material-elements/material-dropdown-list/material-dropdown-list.scss';
import './material-elements/material-footer/material-footer.scss';
import './material-elements/material-input/material-input.scss';
import './material-elements/material-navbar/material-navbar.scss';
import './material-elements/material-pane/material-pane.scss';
import './material-elements/material-popup/material-popup.scss';
import './material-elements/material-snackbar/material-snackbar.scss';
import './material-elements/material-spinner/material-spinner.scss';
import './material-elements/material-tabs/material-tabs.scss';
import './material-elements/material-textarea/material-textarea.scss';
import './material-elements/material-waves/material-waves.scss';

register('material-button', mui.MaterialButton);
register('material-card', mui.MaterialCard);
register('material-checkbox', mui.MaterialCheckbox);
register('material-dropdown', mui.MaterialDropdown);
register('material-dropdown-list', mui.MaterialDropdownList);
register('material-footer', mui.MaterialFooter);
register('material-input', mui.MaterialInput);
register('material-navbar', mui.MaterialNavbar);
register('material-pane', mui.MaterialPane);
register('material-popup', mui.MaterialPopup);
register('material-snackbar', mui.MaterialSnackbar);
register('material-spinner', mui.MaterialSpinner);
register('material-tabs', mui.MaterialTabs);
register('material-waves', mui.MaterialWaves);