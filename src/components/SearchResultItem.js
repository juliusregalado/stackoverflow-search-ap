import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import Answers from './Answers';

const SearchResultItem = (props) => {
  const { body, owner, title, tags, score, view_count, answer_count, creation_date } = props.data;
  const collapseId = `collapse-${props.index}`;
  const dateFormatted = moment(creation_date).format("MMMM D YYYY");

  const getBadgeColor = (inp) => {
    return inp <= 0 ? 'warning' : 'primary' ;
  }

  const getTags = () => {
    return tags.map((tag, i) => {
      return  <span key={i} className="badge badge-pill badge-secondary ml-2">{tag}</span>;
    })
  }
  
  return (
    <div className="container mb-4">
      <div className="accordion" id="accordionExample">
        <div className="card">
        
          <div className="card-header tedxt-center" id="headingOne">
            <ReactMarkdown source={title} escapeHtml={false}/>
            <button className="btn btn-link p-0" type="button" data-toggle="collapse" data-target={`#${collapseId}`} aria-expanded="true" aria-controls="collapseOne">
             see all..
            </button>
            
            <p className="text-muted mb-0">Asked by: {owner.display_name}</p>

            <div>
              <span className={`badge badge-${getBadgeColor(answer_count)} mr-2`}>answers:{answer_count}</span>
              <span className={`badge badge-${getBadgeColor(score)} mr-2`}>score:{score}</span>
              <span className={`badge badge-${getBadgeColor(view_count)} mr-2`}>views:{view_count}</span>
            </div>
          </div>
      
          <div id={collapseId} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body"> 
              <ReactMarkdown source={body} escapeHtml={false}/>
            </div>
            <div className="card-footer text-muted">
              <p>Created: {dateFormatted}</p>
              <div>
                tags:{getTags()}
              </div> 
            </div>
          </div>

          <Answers data={props.data}/>

        </div>
      </div>
    </div>
  )
}

export default SearchResultItem;