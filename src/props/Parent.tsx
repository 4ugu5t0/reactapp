import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={ () => console.log('clicked')}>
            texto
        </ChildAsFC>
    );
}

export default Parent;