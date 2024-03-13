const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

function createAndRenderBlog() {
    var usernameInput = document.getElementById("username").value;
    var titleInput = document.getElementById("title").value;
    var contentInput = document.getElementById("content").value;

    if (usernameInput === "", titleInput === "", contentInput === "") {
        alert("Form cannot be empty")
        return null
    } else {
        const blog = {
            username: usernameInput,
            title: titleInput,
            content: contentInput,
        };
        console.log(blog)
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        usernameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
        window.location.href = "blog.html";
    }
}

document.getElementById("blogForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("click");
    createAndRenderBlog();
    document.getElementById("username", "title", "content").appendChild(newEntry);
    document.getElementById("username", "title", "content").value = "";
})