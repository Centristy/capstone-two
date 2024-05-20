import React, { useState } from "react";
import "./SearchForm.css";

/** Search widget.
 *
 * Appears on Explorer Page so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { Songlist Generate } -> SearchForm
 */

function GenerateButton({ searchFor, query }) {

  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState(query);

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }


  return (
      
        <form className="form-inline" onSubmit={handleSubmit}>
          
          <button type="submit" className="btn btn-lg btn-primary generate">
            Generate
          </button>
        </form>

  );
}

export default GenerateButton;
