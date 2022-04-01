import React from "react";
import ReactDOM from "react-dom";
import { CommentDetail } from "./CommentDetail";

import faker from "faker";
import { ApprovalCard } from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments" style={{ marginTop: "2rem" }}>
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure you want to do this ?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={"Davi"}
          timeAgo={"Today at 4:45PM"}
          comment="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={"Sam"}
          timeAgo={"Today at 2:00PM"}
          comment="I lik the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={"Jhon"}
          timeAgo={"Yesterday at 5:00PM"}
          comment="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
