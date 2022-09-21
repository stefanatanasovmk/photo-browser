import { useEffect } from "react";
import { Link } from "react-router-dom";
import InfoMsg from "./InfoMsg";
import LoadMoreBtn from "./LoadMoreBtn";
import { useAppSelector, useAppDispatch } from "./redux/app/hooks";
import { increment } from "./redux/features/images/imagesSlice";
import { getImages } from "./redux/features/images/imagesSlice";

export default function Images(): JSX.Element {
  const { images, limit, status } = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();

  function handleLoadMore() {
    dispatch(increment());
  }
  useEffect(() => {
    dispatch(getImages({ limit: limit }));
  }, [dispatch, limit]);
  return (
    <>
      {status !== "error" ? (
        <div style={cardsContainer}>
          {images.map((e) => {
            return (
              <div key={e.id} style={imageCard}>
                <Link to={`/image/${e.id}`}>
                  <img style={image} src={`${e.thumbnailUrl}`} alt={e.title} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <InfoMsg msg="Something is wrong with the API, please try again" />
      )}
      <LoadMoreBtn handleLoadMore={handleLoadMore} status={status} />
    </>
  );
}

const cardsContainer: React.CSSProperties = {
  width: "90%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "100px",
};
const imageCard: React.CSSProperties = {
  width: "150px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "0.5vh",
  backgroundColor: "#FFFEFE",
  borderRadius: "5px",
  boxShadow: "1px 2px 5px rgba(0,0,0,0.75)",
  transition: "all 0.3s ease-in-out",
};
const image: React.CSSProperties = {
  borderRadius: "5px",
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
};
