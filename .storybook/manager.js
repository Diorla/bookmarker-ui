import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import brandImage from '../src/assets/bookmarker.png';

const brand = create({
  base: 'light',
  brandTitle: 'Bookmarker',
  brandUrl: 'https://bookmarker-one.vercel.app/',
  brandImage,
});

addons.setConfig({
  theme: brand,
});
