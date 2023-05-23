const editPost = async (event) => {
  event.preventDefault();
  const titleEdit = document.getElementById("titleEdit").value.trim();
  const commentEdit = document.getElementById("commentEdit").value;
  const postId = document.getElementById("postId").innerHTML;

  if (titleEdit && commentEdit) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ titleEdit, commentEdit }),
      headers: { "Content-Type": "application/json" },
    });
 /*Takes you to dashboard after post edit or throws alert that post failed to update*/
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Post failed to update");
    }
  }
};
 /*Allows user to delete post*/
const deletePost = async (event) => {
  event.preventDefault();
  const postId = document.getElementById("postId").innerHTML;
  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
   /*Returns user to dashboard after delete or throws alert that the delete failed*/
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Post failed to delete");
  }
};

document.getElementById("edit-btn").addEventListener("click", editPost);

document.getElementById("delete-btn").addEventListener("click", deletePost);
