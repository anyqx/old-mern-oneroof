import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
