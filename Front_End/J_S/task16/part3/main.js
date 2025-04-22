window.onload = () => displayNotes();

function addNote() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title || !description) {
    alert("Title and description cannot be empty or just spaces!");
    return;
  }

  const note = { title, description };
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  displayNotes();
}

function displayNotes() {
  const notesContainer = document.getElementById("notes-container");
  notesContainer.innerHTML = "";
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${index})">×</button>
      <h2>${note.title}</h2>
      <p>${note.description}</p>
    `;

    notesContainer.appendChild(noteDiv);
  });
}

// function deleteNote(index) {
//   let notes = JSON.parse(localStorage.getItem("notes")) || [];
//   notes.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notes));
//   displayNotes();
}
