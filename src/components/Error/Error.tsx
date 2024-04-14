import './Error.css'

interface Props {
    error: string
}
function Error({error}: Props) {
    return (
        <>
            <h2>{error}</h2>
        </>
    )

}

export default Error