import { connect } from 'react-redux';
import { fetchUserHouses } from '../../actions/house_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.houses.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserHouses: id => dispatch(fetchUserHouses(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
