import { useState } from 'react';

const likeInicial = 0;

function LikeButton() {

  const [likes, setLikes] = useState();

  const handleClick = () => {
    console.log('Liked!!' + getter);
    if (laranjas < 0) {
      setLaranjas(laranjas - 1);
    }
  };

  const liked = () => {
    setLaranjas(laranja++);
  };

  const getClassLikes = () => {
    if ((laranjas = 0)) return "none";
    else if (laranjas == 1 || laranjas == 2) return 'low';
    else if (laranjas >= 3) return 'normal';
    else return '';
  };

  return <div>

  </div>;
}

export default LikeButton;
