const editPost = async (event) => {
  event.preventDefault();
  const titleEdit = document.getElementById("titleEdit").value.trim();
  const contentEdit = document.getElementById("contentEdit").value.trim();
  const postId = document.getElementById("postId").innerHTML;

  if (titleEdit && contentEdit) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ titleEdit, contentEdit }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Post failed to update");
    }
  }
};

const deletePost = async (event) => {
  event.preventDefault();
  const postId = document.getElementById("postId").innerHTML;
  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Post failed to delete");
  }
};

document.getElementById("edit-btn").addEventListener("click", editPost);

document.getElementById("delete-btn").addEventListener("click", deletePost);
