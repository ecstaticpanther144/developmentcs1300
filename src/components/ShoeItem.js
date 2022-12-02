export default function ShoeItem(props){
    const item = props.item
    const buttonFunction = props.buttonFunction 
    return (
        <div class="shoeItem">
            <div><h3>{item.name}</h3></div>
            <div><h4>{item.description}</h4></div>
            <div><img src= {item.image}></img></div>
            <div><h4>{item.price}</h4></div>
            <div>{buttonFunction(item)}</div>
        </div>
    );
}