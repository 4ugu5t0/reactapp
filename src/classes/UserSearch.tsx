import {Component} from 'react';

interface User {
    name: string;
    age:number
}
interface UserSearchProps {
    users: User[]
    //será um vetor
}

interface UserSearchState {
    name:string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () =>{
        const foundUser = this.props.users.find((user) => {
            return user.name ===this.state.name;
        });
        this.setState({user:foundUser});
    }

    render() {
        const { name, user } = this.state;

        return(
        <div>
            <div>
                User Search
            </div>
            <div>
                <label htmlFor="nameInput">Nome: </label>
                <input id='nameInput' type="text" value={name} onChange={(e) => this.setState({name: e.target.value})} />
                <button onClick={this.onClick}>Procurar</button>
            </div>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
        )
    }
}

export default UserSearch;