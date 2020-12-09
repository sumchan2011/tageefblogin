import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });

    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                </div>
            ) :
            facebookData = (<FacebookLogin
                appId="2909700159316971"
                autoLoad={true}
                fields="name,picture,email"
                scope="user_likes,user_photos,user_friends,public_profile,email,pages_read_engagement,pages_show_list,instagram_manage_insights,instagram_basic"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}
