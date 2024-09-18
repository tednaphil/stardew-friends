import "./Error.css";

interface Props {
  error: string;
}
function Error({ error }: Props) {
  return (
    <section className="error-display">
      {error.length ? (
        <h2 className="error-message">{error}</h2>
      ) : (
        <h2 className="error-message">That page doesn't exist!</h2>
      )}
    </section>
  );
}

export default Error;
