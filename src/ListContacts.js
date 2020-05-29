import React, { Component } from 'react';

class ListContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {

        return(<ol>
            {this.props.contacts.map((people) => (
                <li key={people.id}>
                    <div style={{backgroundImage : `url(${people.avatarURL})`}}>

                    </div>
                </li>
            ))}
        </ol>);
    }
}
 
export default ListContacts;