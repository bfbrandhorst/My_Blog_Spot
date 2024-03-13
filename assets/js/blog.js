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
    <h2>${blogData[i].title}</h2>
    <p> ${blogData[i].content}</p>
    <h2> ${blogData[i].username}</h2>
    </div>
    `
    BlogContainer.innerHTML = blogCard
}