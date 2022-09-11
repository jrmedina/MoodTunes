import React, { useState} from 'react';


const FeaturedMoods: React.FC = () => {


    const [moods, setMoods] = useState<string[]>([
      "Angry",
      "Chasing",
      "Dark",
      "Dreamy",
      "Eccentric",
      "Elegant",
      "Epic",
      "Euphoric",
      "Fear",
      "Floating",
      "Funny",
      "Glamorous",
      "Happy",
      "Hopeful",
      "Marching",
      "Mysterious",
      "Peaceful",
      "Quirky",
      "Relaxing",
      "Restless",
      "Romantic",
      "Running",
      "Sad",
      "Scary",
      "Sentimental",
      "Sexy",
      "Smooth",
      "Sneaking",
      "Suspense",
      "Weird",
    ]
    ) 
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default FeaturedMoods
