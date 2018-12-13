import React from 'react';
import SearchResultItem from './SearchResultItem';
import Robot from './Robot';

const SearchResults = (props) => {

  const renderResultItems = () => {
    if(props.data.apiData) {
      return props.data.apiData.map((el, i) => {
        return <SearchResultItem data={el} key={i} index={i}/>
      })
    } else if(props.data.error) {
      return <p>{props.data.error}</p>
    } 
    else {
      return <p>Your Query Returned 0 Results</p>
    }
  }

  const renderMessage = () => {
    return (
      props.data.apiDataLoaded ? `Returned ${props.data.apiData.length} Results:` : 'Please Enter Your Query'
    ) 
  }
  return (
    <div className="mt -5 main-body">
      <h3 className="text-center mt-2">{renderMessage()}</h3>
      {props.data.apiDataLoaded ? 
        renderResultItems()
        : 
        <Robot size={'400x400'} class={'huge-center'}/>}
    </div>
  )
}

export default SearchResults;