
import { useState } from 'react';

const LikeButton = ({isLiked, onToggleLike})=>{
    const[liked, setLiked] = useState(isLiked);

    const handleClick = () =>{
        setLiked(!liked);
        onToggleLike();
    }

    return (
        <button
        onClick = {handleClick}>
        {liked ? '❤️ Liked': '🤍 Like' }    
        </button>
    )
}

export default LikeButton;