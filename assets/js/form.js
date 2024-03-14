const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

function createAndRenderBlog() {
    var usernameInput = document.getElementById("username");
    var titleInput = document.getElementById("title");
    var contentInput = document.getElementById("content");

    if (usernameInput.value === "" || titleInput.value === "" || contentInput.value === "") {
        alert("Whoops, please complete the form!")
        return null
    } else {
        const blog = {
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value,
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

})