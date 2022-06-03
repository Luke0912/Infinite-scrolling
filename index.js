const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}`
    );
    const data = await res.json();
    // console.log(data[0].body);
    showData(data);
  } catch (error) {
    console.log("");
  }
};
getPost();

const showData = (e) => {
  e.map((el) => {
    const htmlData = `
      <div class="post">
      <p class="post-id">${postCount++}</p>
      <h2 class="title">${el.title}</h2>
      <p class="post-info">${el.body}</p>
    </div>;
      `;
    container.insertAdjacentHTML("beforeend", htmlData);
  });
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    reloadData();
    console.log("I am at Bottom");
  }
});
const reloadData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 300);
};
