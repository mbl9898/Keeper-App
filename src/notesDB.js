function updateNotes(notes) {
  localStorage.setItem("notes", JSON.stringify([...notes]));
}

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem("notes"));
  } catch (ex) {
    return [];
  }
}

export { getNotes, updateNotes };
