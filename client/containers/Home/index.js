import { compose, graphql } from 'react-apollo';
import { withTranslation } from 'react-i18next';

import { HomeScreenComponent } from '../../components/Home';
import { withParseCategoryData } from './withParseCategoryData';
import { withParsePostData } from './withParsePostData';
import { PostCategoryQueries, PostQueries } from '../../graphql/queries';

export default compose(
  withTranslation('home screen'),
  graphql(PostCategoryQueries.postCategories, { name: 'getPostCategoryQuery' }),
  graphql(PostQueries.posts, { name: 'getPostQuery' }),
  withParseCategoryData,
  withParsePostData,
)(HomeScreenComponent);
