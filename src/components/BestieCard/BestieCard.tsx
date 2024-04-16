import './BestieCard.css';

interface Props {
    id: string
    name: string
    avatar: string
}

function BestieCard({ id, name, avatar }: Props) {
    //pass removeBestie function from App component
    return (
        <section className='bestie-cards'>
            <img src={avatar}/>
            <p>{name}</p>
            {/* remove bestie button */}
            {/* view profile button */}
        </section>
    )
}

export default BestieCard