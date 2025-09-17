const postForm = document.getElementById("post-form");
const postList = document.getElementById("post-list");

let posts = [];

// Function to render posts
function renderPosts() {
  postList.innerHTML = "";
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postList.appendChild(postDiv);
  });
}

// Form submit event to add post
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  posts.push({ title, content });
  renderPosts();

  postForm.reset();
});
