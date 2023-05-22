const createPost = async (event) => {
  event.preventDefault();
  const postTitle = document.getElementById("newTitle").value.trim();
  const postContent = document.getElementById("newContent").value.trim();

  if (postTitle && postContent) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ postTitle, postContent }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Post failed to create");
    }
  }
};

document.getElementById("create-btn").addEventListener("click", createPost);
