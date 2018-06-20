//User CRUD

function getUsers() {
  return fetch("http://localhost:3000/api/v1/users").then(res => res.json());
}

//Project CRUD

function getProject(id) {
  return fetch(`http://localhost:3000/api/v1/projects/${id}`).then(res =>
    res.json()
  );
}

function postProject(data) {
  return fetch(`http://localhost:3000/api/v1/projects/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function patchProject(project) {
  fetch(`http://localhost:3000/api/v1/projects/${project.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  }).then(res => res.json());
}

function deleteProject(project) {
  //not in use yet
  fetch(`http://localhost:3000/api/v1/projects/${project.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

//Task CRUD

function postTask(data) {
  return fetch(`http://localhost:3000/api/v1/tasks/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function patchTask(task) {
  fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  }).then(res => res.json());
}

//UserProject CRUD

function postUserProject(data) {
  fetch(`http://localhost:3000/api/v1/userprojects/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
