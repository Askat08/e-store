import React from "react";
import Product from "./Product";
import SearchBox from "./SearchBox";

const ProductList = (props) => {
  const {
    items,
    handleAddtoCart,
    messageAlert,
    isError,
    onSearchChange,
    onSearchClick,
    searchfield,
  } = props;

  const comics = items
    .map((comic, i) => {
      return (
        <Product
          key={comic.id}
          id={comic.id}
          price={comic.prices[0].price}
          title={comic.title}
          path={comic.thumbnail.path}
          ext={comic.thumbnail.extension}
          description={comic.description}
          handleAddtoCart={handleAddtoCart}
          messageAlert={messageAlert}
        />
      );
    })
    .slice(0, 15); // render only first 15 items

  // checking if items exists to render and no error

  if (items.length === 0 && !isError) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="">
          <SearchBox
            onSearchChange={onSearchChange}
            searchField={searchfield}
            onSearchClick={onSearchClick}
          />
        </div>
        <strong>Loading...</strong>
        <div
          className="spinner-border m-5"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <p className="lead text-center">Data not found</p>
        <SearchBox onSearchChange={onSearchChange} searchField={searchfield} />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="jumbotron m-0">
          <div className="">
            <SearchBox
              onSearchChange={onSearchChange}
              searchField={searchfield}
              onSearchClick={onSearchClick}
            />
          </div>
          <div className="row m-5 justify-content-center">{comics}</div>
        </div>
      </React.Fragment>
    );
  }
};

export default ProductList;
