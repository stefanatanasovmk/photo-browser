import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InfoMsg from "./InfoMsg";
import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import { getImage } from "./redux/features/images/imagesSlice";

interface ParamsProps {
  [key: string]: string;
}

export default function Image(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<ParamsProps>();
  const { image, status } = useAppSelector((state) => state.images);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getImage(id));
    }
  }, [dispatch, id]);
  return (
    <div style={imageContainer}>
      {status !== "error" ? (
        <>
          {status !== "loading" ? (
            <>
              <img style={imageStyle} src={image.url} alt={image.title} />
              <div style={imageText}>
                <p>imageId: {image.id}</p>
                <p>description/title: {image.title}</p>
              </div>
            </>
          ) : (
            <InfoMsg msg="Loading..." />
          )}
        </>
      ) : (
        <InfoMsg msg="Ooops, something went wrong, please try again" />
      )}
      <div style={goBackLinkContainer}>
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </div>
    </div>
  );
}

const imageContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  backgroundColor: "#FFFEFE",
  margin: "20px",
  height: "90%",
  width: "600px",
  borderRadius: "20px",
  boxShadow: "1px 2px 5px rgba(0,0,0,0.75)",
};
const imageStyle: React.CSSProperties = {
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
};
const imageText: React.CSSProperties = {
  padding: "20px",
};
const goBackLinkContainer: React.CSSProperties = {
  paddingBottom: "20px",
  paddingLeft: "20px",
};
