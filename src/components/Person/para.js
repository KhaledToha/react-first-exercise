const Para = (props) => {
    console.log(props.hobbies);
    const person = <div>
        { props.name.length < 8 ?
        <p>Learn some information about this {props.name}</p>:
        <p>Learn some information about this {props.name.slice(0,6)}</p>
}
   {props.age > 21 ?
        <h3>Have Drinks</h3>:
        <h3>you must be 21</h3>
    } 
     
     <ul>
        hobbies
        {
            props.hobbies.map(e => <li>{e}</li>)
        }
     </ul>
    </div>
     return person
}
export default Para