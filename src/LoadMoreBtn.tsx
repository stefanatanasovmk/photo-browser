interface Props {
  status: string;
  handleLoadMore: () => void;
}
export default function LoadMoreBtn({
  handleLoadMore,
  status,
}: Props): JSX.Element {
  return (
    <button onClick={handleLoadMore} style={button}>
      {status === "loading" ? "Loading.." : "Load More"}
    </button>
  );
}

const button: React.CSSProperties = {
  fontFamily: "Roboto mono",
  fontSize: "1.2rem",
  fontWeight: 400,
  position: "fixed",
  bottom: "0",
  width: "200px",
  height: "50px",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px",
  boxShadow: "1px 2px 5px rgba(0,0,0,0.75)",
};
