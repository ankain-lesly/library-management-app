import React from "react";
import "../../assets/css/module-custom-select.css";
import { BsFillCaretDownFill, BsSearch, BsArrowLeft } from "react-icons/bs";

const CustomSelect = (props) => {
  const { name, styleMe, data } = props;

  const [showOptions, setShowOptions] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const [noSearch, setNoSearch] = React.useState(false);
  const searchInputRef = React.useRef();

  const setUpOptions = () => {
    setShowOptions(true);
    setOptions(data);
  };

  const handleSearch = (search) => {
    let newData = data
      .filter(
        (option) =>
          option.title.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
      .sort();

    if (newData.length <= 0) setNoSearch(true);
    else setNoSearch(false);
    setOptions(newData);
  };

  const handleSelected = (data) => {
    props.handleSelected(data);
    setShowOptions(false);
    setSelected(data.title);
  };

  React.useEffect(() => {
    if (showOptions) searchInputRef.current.focus();
  }, [showOptions]);

  return (
    <div className='custom_select'>
      <div
        onClick={setUpOptions}
        className={`select_btn flex between ${styleMe}`}
      >
        <span className='label'>{selected ? selected : `Select ${name}`}</span>

        <input
          type='hidden'
          className='selected_info'
          value={selected}
          name='countries'
        />

        {props.isloaded ? (
          <span className='loader inline-text'></span>
        ) : (
          <BsFillCaretDownFill
            fontSize={15}
            className={`select_icon ${showOptions ? "active" : ""}`}
          />
        )}
      </div>
      <div className='data_container'>
        {showOptions && (
          <>
            <div
              className='custome_select_overlay'
              onClick={() => setShowOptions(false)}
            ></div>
            <div className='select_content'>
              <div className='select_search'>
                <input
                  ref={searchInputRef}
                  type='search'
                  className='search_input'
                  placeholder='Search...'
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <BsSearch className='search_icon' />
              </div>
              <div className='options_group'>
                <ul className='options scroll-bar'>
                  {noSearch && <p id='null-value'>Ooops not found</p>}
                  {options.map(
                    (option) =>
                      option && (
                        <ListOption
                          key={option.optionID}
                          selected={selected}
                          data={option}
                          handleSelected={handleSelected}
                        />
                      )
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ListOption = ({ selected, data, handleSelected }) => {
  let state = selected === data.title;
  return (
    <li
      className={`list-option flex between ${state ? "selected" : ""}`}
      onClick={() => handleSelected(data)}
    >
      <span className='option_text'>{data.title}</span>{" "}
      <BsArrowLeft className='option_icon' />
    </li>
  );
};
export default CustomSelect;
