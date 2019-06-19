import React from 'react';

import { ScreenHeight } from '../../../constants/Dimensions';
import { HeaderComponent } from '../../../components/NavigationOptions/HeaderTab';

const HeaderConfig = HeaderComponent();

export const defaultNavigationOptions = (props) => ({
  headerStyle: {
    height: ScreenHeight * 0.10,
  },
  headerTitle: (<HeaderConfig {...props} />),
});