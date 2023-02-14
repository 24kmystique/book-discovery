import "./QueryBar.css";

// import libraries
import { useState } from "react";

/**
 * Search bar component to search for an item within `props.dataBank`
 * 
 * @param {map} props.dataBank A dictionary of data to search within
 * @param {map} props.title Used in `placeholder` attribute in query `<input>` tag
 * @returns 
 */
function QueryBar(props) {
  const [searchResult, setSearchResult] = useState([]);

  /**
   * Given a input string, `e.target.value`, search for input within data bank (`props.dataBank`).
   * Store the top five results that contains input string, `e.target.value`, in `searchResult`.
   * 
   * @param {string} e.target.value Input value in query input bar
   */
  function handleSearch(e) {
    if (e.target.value.length !== 0) {
      let query = e.target.value.toLowerCase();
      let caseInsensitiveQuery = new RegExp(e.target.value, "ig");
      let resultList = props.dataBank.filter((book) => book.name.toLowerCase().includes(query));
      let topFiveResult = resultList.slice(0,5);
      topFiveResult.map((book) => {
        book["htmlTagText"] = book.name.replaceAll(caseInsensitiveQuery, `<b>${query}</b>`)
      });
      console.log(resultList);
      setSearchResult([]);
      setSearchResult(topFiveResult);
    } else setSearchResult([]);
  }

  return (
    <div className="query__input-wrapper">
      <input className="query__input" type="search" onChange={handleSearch} placeholder={props.title} />
      <div className="query__all-results-wrapper--relative-pos">
        <div className="query__all-results-wrapper--absolute-pos">
          {searchResult.map((query) => 
            <div className="query__single-result-wrapper" key={query.isbn}>
              <div dangerouslySetInnerHTML={{__html: query.htmlTagText}} />
              <img className="query__result-img" alt="bookcover" src={query.image}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QueryBar;