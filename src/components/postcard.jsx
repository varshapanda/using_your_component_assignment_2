import LikeButton from "./likebutton";

const PostCard = ({ postData, onToggleLike }) =>{
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={postData.profileImage} alt="profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <h3 style={{ marginLeft: '10px' }}>{postData.username}</h3>
      </div>
      <p>{postData.content}</p>
      <LikeButton isLiked={postData.isLiked} onToggleLike={() => onToggleLike(postData.id)} />
    </div>
  );
}

export default PostCard;
