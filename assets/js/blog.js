const darkModeToggle =
    document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function goBack() {
    window.history.go(-1);
}

const BlogContainer = document.querySelector(".BlogContainer")
const blogData = JSON.parse(localStorage.getItem("blogs")) || []
let blogCard = ""

for (let i = 0; i < blogData.length; i++) {
    console.log(blogData[i])

    blogCard += `
    <div class= "card">
    <h2>${blogData[i].username}</h2>
    <p> ${blogData[i].title}</p>
    <h2> ${blogData[i].content}</h2>
    </div>
    `
    BlogContainer.innerHTML = blogCard
}