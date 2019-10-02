import React, {Component} from "react";
import PropTypes from "prop-types";
import UsersList from "./UsersList";

class Users extends Component {

    static propTypes = {
        fetchUsers: PropTypes.func.isRequired,
        usersFetching: PropTypes.bool,
    };

    componentDidMount() {
        const {fetchUsers} = this.props;
        fetchUsers();
    }

    render() {
        const {users, usersFetching} = this.props;
        if(usersFetching) {
            return (<div>Загрузка</div>)
        }

        return (
            <div>
                <UsersList users={users}/>
            </div>
        )
    }
}

export default Users;