import { component } from 'riot';

import Documentation from './riot-mui-documentation.riot';

import 'riot-mui/build/styles/riot-mui.css'

const createApp = component(Documentation);
const tags = document.getElementsByTagName('riot-mui-documentation');
for (let i = 0; i < tags.length; i++) {
  createApp(tags.item(i));
}
