import React from "react";
import BookCard from "./BookCard";
import { nanoid } from "nanoid";
import LoaderSpinner from "./LoaderSpinner";
import useFetchFunc from "../../../assets/Hooks/useFetchFunc";
import { useStateContext } from "../../../contexts/ContextProvider";

const HomeBooksSection = () => {
  const { setToast } = useStateContext();
  const [bookData, setBookData] = React.useState(null);
  const [actions, setActions] = React.useState(null);

  const { isLoading, response, error, fetchData } = useFetchFunc();
  React.useEffect(() => {
    setActions({
      reacts: [8],
      favorites: [2, 3],
    });
    fetchData({
      method: "GET",
      url: "/products/books",
    });
  }, []);

  React.useEffect(() => {
    if (error || error === undefined) {
      setToast({
        type: "warning",
        title: "Network Error",
        text: `Error Getting resources please try again`,
      });
      return;
    }
    if (response) {
      setBookData(response.data);
      return;
    }
  }, [response, error]);

  return (
    <>
      <div>
        {isLoading && <LoaderSpinner />}
        <div className="items-container">
          {bookData &&
            bookData.map((data) => (
              <BookCard key={nanoid()} data={data} actions={actions} />
            ))}
        </div>
        {error ||
          (error === undefined && (
            <p style={{ color: "var(--clr-text-muted)" }}>
              Connections error! please try again...
            </p>
          ))}
      </div>
    </>
  );
};
export default HomeBooksSection;
