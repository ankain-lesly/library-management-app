import React from "react";
import { RiDeleteBin6Fill, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useFetchFunc from "../../../assets/Hooks/useFetchFunc";
import "../../../assets/css/module-custom-tables.css";
import { useStateContext } from "../../../contexts/ContextProvider";

const Books = () => {
  const [checkAll, setCheckAll] = React.useState(false);
  const [books, setBooks] = React.useState(null);
  const { isLoading, response, error, fetchData } = useFetchFunc();
  const { setToast } = useStateContext();

  React.useEffect(() => {
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
      setBooks(response.data);
      console.log(response);
      return;
    }
  }, [response, error]);

  return (
    <div>
      <div className='header flex between mb-2'>
        <h2>My Books</h2>
        <Link to='/dashboard/create/book' className='btn btn-s'>
          Create New
        </Link>
      </div>

      <div className='header flex between gap-2 mb-2'>
        <input type='text' placeholder='Search table' />
        <input type='text' placeholder='Table options' />
      </div>

      <div className='container'>
        <div className='table-container custom-table-responsive'>
          <table className='table custom-table'>
            <thead>
              <tr>
                <th scope='col'>
                  <label className='control control--checkbox'>
                    <input
                      type='checkbox'
                      className='js-check-all'
                      checked={checkAll}
                      onChange={() => setCheckAll(!checkAll)}
                    />
                    <div className='control__indicator'></div>
                  </label>
                </th>

                {/* <th scope='col'>Order</th> */}
                <th scope='col'>Category</th>
                <th scope='col'>Details</th>
                <th scope='col'>Author</th>
                <th scope='col'>Date</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => (
                  <TableRow key={book.bookID} checkAll={checkAll} data={book} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ checkAll, data }) => {
  const [check, setCheck] = React.useState(() => (checkAll ? checkAll : false));

  // console.log(checkAll);
  // console.log(check);

  return (
    <>
      <tr className='spacer'>
        <td colSpan='100'></td>
      </tr>
      <tr className={`${check ? "active" : ""}`}>
        <th scope='row'>
          <label className='control control--checkbox'>
            <input
              type='checkbox'
              checked={check}
              onChange={() => setCheck(!check)}
            />
            <div className='control__indicator'></div>
          </label>
        </th>
        {/* <td>1392</td> */}
        <td>
          <p className='txt-capitalize'>{data.categoryID}</p>
        </td>
        <td>
          <p className='txt-capitalize'>{data.title}</p>
          <small className='d-block'>
            {data.description ? data.description : "No description"}
          </small>
          <br />
          <small className='d-block'>
            {data.URL ? <Link to={data.URL}>Go to book</Link> : "No link"}
          </small>
        </td>
        <td>
          <p className='txt-capitalize'>{data.author}</p>
        </td>
        <td>
          <p className='txt-capitalize'>{data.addedOnDate}</p>
        </td>
        <td>
          <div className='txt-center flex start gap-x'>
            <button className='table-btn' title='Delete Item'>
              <RiDeleteBin6Fill fontSize={20} />
            </button>
            <Link to='#' className='table-btn' title='Edit Category'>
              <RiEdit2Line fontSize={20} />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};
export default Books;
