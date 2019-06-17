import React from 'react';

const PostPreview = props => {
  console.log(props);
  const { timestamp, upvotes, downvotes, text } = props.post;

  /* state = {
    data: {
      id: 1,
      timestamp: new Date().toLocaleDateString(),
      upvotes: 0,
      downvotes: 0,
      text: "This is a thought I once had. Isn't it cool huh?",
      longitude: 297,
      latitude: 325
    },

    tags: [
      { text: 'ThoughtApp' },
      { text: 'ThunkIsCool' },
      { text: 'WatIsThunk' }
    ]
  }; */

  const tags = [
    { text: 'ThoughtApp' },
    { text: 'ThunkIsCool' },
    { text: 'WatIsThunk' }
  ];

  let displayTags = tags.map((t, i) => {
    return <span key={i}>{'#' + t.text}</span>;
  });

  return (
    <div className='post-preview'>
      <div className='details-top'>
        <span className='timestamp'>{timestamp}</span>
      </div>

      <div className='text'>{text}</div>

      <div className='tags'>{displayTags}</div>

      <div className='controls-bottom'>
        <div className='vote-wrapper'>
          <button className='vote up'>Up</button>
          <span className='votes'>{upvotes - downvotes}</span>
          <button className='vote down'>Down</button>
        </div>
        <button className='comment-btn'>
          <i className='fas fa-comments' />
        </button>
        <button className='report'>
          <i class='fas fa-flag' />
        </button>
      </div>
    </div>
  );
};

export default PostPreview;
