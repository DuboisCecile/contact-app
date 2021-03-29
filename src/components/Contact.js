import "./Contact.css";

const name = "Maki catta";
const avatar = "https://www.gravatar.com/avatar/35415?d=robohash&s=300";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div>
            <div className={online ? "status-online" : "status-offline"}></div>
            <p className="status-text">{online ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
