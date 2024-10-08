import "./BestieCard.css";
import type { Friend } from "../App/App";
import { Link } from "react-router-dom";
import Incrementer from "../Incrementer/Incrementer";

interface Props {
  id: string;
  name: string;
  friendship: number;
  besties: Friend[];
  setBesties: (array: Friend[]) => void;
}

function BestieCard({ id, name, friendship, besties, setBesties }: Props) {
  return (
    <section className="bestie-card">
      <img
        className="bestie-avatar"
        src={require(`../../images/${name}.png`)}
        alt={`${name} avatar`}
      />
      <p className="name">{name}</p>
      <Link to={`/characters/${id}`}>
        <p className="profile-link">View Profile</p>
      </Link>
      <Incrementer
        friendship={friendship}
        id={id}
        besties={besties}
        setBesties={setBesties}
      />
    </section>
  );
}

export default BestieCard;
