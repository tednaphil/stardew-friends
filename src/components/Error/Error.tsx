import './Error.css'

interface Props {
    error: string
}
function Error({error}: Props) {
    return (
        <>
            {error.length ? <h2>{error}</h2> : <h2>That page doesn't exist!</h2>}
        </>
    )

}

export default Error