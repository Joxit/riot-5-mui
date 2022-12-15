import { component } from 'riot';

import Documentation from './riot-mui-documentation.riot';

import '../../src/material-elements/material-button/material-button.scss';
import '../../src/material-elements/material-card/material-card.scss';
import '../../src/material-elements/material-checkbox/material-checkbox.scss';
import '../../src/material-elements/material-combo/material-combo.scss';
import '../../src/material-elements/material-dropdown/material-dropdown.scss';
import '../../src/material-elements/material-footer/material-footer.scss';
import '../../src/material-elements/material-input/material-input.scss';
import '../../src/material-elements/material-navbar/material-navbar.scss';
import '../../src/material-elements/material-popup/material-popup.scss';
import '../../src/material-elements/material-snackbar/material-snackbar.scss';
import '../../src/material-elements/material-spinner/material-spinner.scss';
import '../../src/material-elements/material-tabs/material-tabs.scss';
import '../../src/material-elements/material-waves/material-waves.scss';

const createApp = component(Documentation);
const tags = document.getElementsByTagName('riot-mui-documentation');
for (let i = 0; i < tags.length; i++) {
  createApp(tags.item(i));
}
