const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(event);
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>{
        console.log(event);
    }

    return(
    <div>
        <label htmlFor="event">.</label>
        <input id='event' onChange={onChange}></input>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
    )
}

export default EventComponent