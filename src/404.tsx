import { Link } from "react-router-dom";

export default function ErrorView(): JSX.Element {
  return (
    <>
      <h1>Page not found. Error 404.</h1>
      <Link to="/">Go back</Link>
    </>
  );
}
