import './Profile.css';
import { useParams } from 'react-router-dom';

function Profile() {
    const chosenChar = useParams().id

    return (
        <>
            <h2>{chosenChar}</h2>
        </>
    )

}

export default Profile