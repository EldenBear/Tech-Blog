 /*Allows user to create a new post with a title and content of said post*/
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
 /*Returns user to dashboard to see their new post or alerts them it failed to create the post*/
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Post failed to create");
    }
  }
};

document.getElementById("create-btn").addEventListener("click", createPost);
