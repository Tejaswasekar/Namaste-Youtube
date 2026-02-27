import React from "react";

const commentsData = [
  {
    name: "Tejas",
    text: "This video is amazing!",
    replies: [
      {
        name: "Rahul",
        text: "Yes bro 🔥",
        replies: [
          {
            name: "Ankit",
            text: "Totally agree!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Coder",
    text: "React learning going strong 💪",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 bg-gray-100 p-3 rounded-lg my-2">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
        alt="user"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      <div className="pl-5 border-l ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;