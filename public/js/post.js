const onClickAddComment = (event) => {
    event.preventDefault();
const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute('id' , 'commentInput');
const btn = document.createElement('button');
    btn.innerHTML = "Save Comment";
    btn.onclick = submitComment;
const post = document.getElementById('post');
    post.appendChild(input);
    post.appendChild(btn);
};

const submitComment = async (event) => {
    event.preventDefault();
const comment = document.getElementById('commentInput').value.trim();
const postId = document.getElementById('postId').innerHTML;
if (comment) {
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({comment, postId}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to create comment');
    }
} 
};

const addCommentButton = document
.getElementById('comment-btn');
if (addCommentButton) {
    addCommentButton
    .addEventListener('click' , onClickAddComment);
};