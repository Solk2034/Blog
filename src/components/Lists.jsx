import "../App.css";
import { useState } from "react";

function Lists(props) {
  const [posts, setPosts] = useState([
    "강남 고기 맛집",
    "남자 코트 추천",
    "애리조나 청년기업",
  ]);
  const [likes, setLikes] = useState("1");

  return (
    <div className="list">
      <h4>
        {posts[props.id]}{" "}
        <span
          onClick={() => {
            setLikes(Number(likes) + 1);
          }}
        >
          👍 {likes}{" "}
        </span>
      </h4>
      <p>2월 17일 발행</p>
      <hr />
    </div>
  );
}

export default Lists;
