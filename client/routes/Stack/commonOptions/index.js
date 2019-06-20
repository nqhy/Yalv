import React from 'react';

import { ScreenHeight } from '../../../constants/Dimensions';
import { HeaderComponent } from '../../../components/NavigationOptions/HeaderTab';

const HeaderConfig = HeaderComponent();

export const defaultNavigationOptions = (props) => ({
  headerStyle: {
    height: ScreenHeight * 0.10,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitle: (<HeaderConfig {...props} />),
});
