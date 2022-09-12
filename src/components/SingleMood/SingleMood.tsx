import React from 'react'

interface SingleMoodProps{
  id: number;
  title: string;
  image: string;
}

const SingleMood: React.FC<SingleMoodProps> = ({ id, title, image }) => {
  return (
    <div className='single-mood'>
      <p>{title}</p>
      <img 
        src={image}/>
    </div>
  )
}

export default SingleMood
