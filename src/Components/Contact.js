import "../Contact.css";
const name = 'Nikolina 576';
const avatar = "https://avatars.githubusercontent.com/nikolina1901";
const online = true;

const Contact =(props)=>{
    const {userName, avatar, status} = props
    return(
    <div className="Contact">
        <img className="avatar" src={avatar} alt="avatar"/>
        <div className="status">
            <h3 className="name">{name}</h3>
            <div className="{status ? status-online : status-offline}"/>
            <p className="status-text">{status ? "online" : "ofline"}</p>
        </div>
    </div>
    )
}

export default Contact;