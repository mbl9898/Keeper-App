import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes, updateNotes } from "../notesDB";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("Fetching Project From Local Storage");
    const notesDB = getNotes();
    if (!notesDB) return;
    setNotes((prevNotes) => {
      return [...notesDB];
    });
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    updateNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    const updated = [...notes];
    const newUpdated = updated.filter((noteItem, index) => {
      return index !== id;
    });

    setNotes((prevNotes) => {
      return [...newUpdated];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
