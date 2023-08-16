import { useState } from 'react';

const users = [
    {name: 'Augusto', age: 22},
    {name: 'João', age: 22},
    {name: 'Maria', age: 22}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();


    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser);
        //console.log(foundUser);
    }

    return(
        <div>
            <div>
                User Search
            </div>
            <div>
                <label htmlFor="nameInput">Nome: </label>
                <input id='nameInput' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={onClick}>Procurar</button>
            </div>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSearch;