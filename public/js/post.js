 /*Allows user to click add comment*/
const onClickAddComment = (event) => {
  event.preventDefault();
  const hideBtn = document.getElementById('comment-btn');
  hideBtn.classList.add('hidden');
  const input = document.createElement("TEXTAREA");
  input.setAttribute("id", "commentInput");
  const btn = document.createElement("button");
  btn.innerHTML = "Comment";
  btn.onclick = submitComment;
  const post = document.getElementById("commentSection");
  post.appendChild(input);
  post.appendChild(btn);
};
 /*Allows user to submit comment onto post*/
const submitComment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById("commentInput").value.trim();
  const postId = document.getElementById("postId").innerHTML;
  if (comment) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create comment");
    }
  }
};

const addCommentButton = document.getElementById("comment-btn");
if (addCommentButton) {
  addCommentButton.addEventListener("click", onClickAddComment);
}
