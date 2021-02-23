import React from 'react';
import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserHouses(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ houses: newState.houses });
    }   
    
    render() {
        if (this.state.houses.length === 0) {
          return (<div>This user has no houses</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Houses</h2>
              {this.state.houses.map(house => (
                <TweetBox key={house._id} text={house.text} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
