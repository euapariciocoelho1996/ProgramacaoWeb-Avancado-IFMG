const api = "http://localhost:3000";

async function addTask() {
  const title = document.getElementById("taskInput").value;
  const category = document.getElementById("category").value;

  await fetch(api + "/tasks", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title,
      category,
    }),
  });

  document.getElementById("taskInput").value = "";

  loadTasks();
}

async function loadTasks() {
  const filter = document.getElementById("filter").value;

  let url = api + "/tasks";

  if (filter) {
    url += "?category=" + filter;
  }

  const response = await fetch(url);

  const tasks = await response.json();

  const list = document.getElementById("taskList");

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task.title + " (" + task.category + ")";

    list.appendChild(li);
  });
}

loadTasks();
