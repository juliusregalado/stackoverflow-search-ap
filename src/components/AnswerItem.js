import React from 'react';
import ReactMarkdown from 'react-markdown';

const AnswerItem = (props) => {
  const collapseId = `collapse-${props.data.answer_id}`;
  console.log(props)
  return (
    <>
    <div class="collapse" id={collapseId}>
      <div class="card card-body">
        <ReactMarkdown source={props.data.body} escapeHtml={false}/>
      </div>
    </div>
    <div class="alert alert-success mb-0" data-toggle="collapse" data-target={`#${collapseId}`} aria-expanded="false" aria-controls="collapseExample" role="alert">
      Answered by: {props.data.owner.display_name}
      <p className="text-muted d-inline"> (click to view)</p>
    </div>
    
    </>
  )
}

export default AnswerItem;