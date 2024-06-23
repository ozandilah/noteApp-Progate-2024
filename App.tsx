import AddNote from "@/screens/addNote";
import EditNote from "@/screens/editNote";
import Home from "@/screens/home";
import { useState } from "react";

interface CurrentPageWidgetProps {
  currentPage: string;
  noteList: any[];
  setCurrentPage: (page: string, noteId?: number) => void;
  addNote: (title: string, desc: string) => void;
  editNote: (id: number, title: string, desc: string) => void;
  deleteNote: (id: number) => void;
  currentEditId?: number; // Tambahkan prop ini
}

const CurrentPageWidget: React.FC<CurrentPageWidgetProps> = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  currentEditId, // Tambahkan prop ini
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          editNote={editNote}
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          noteId={currentEditId} // Tambahkan prop ini
        />
      );
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      );
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentEditId, setCurrentEditId] = useState<number | undefined>(
    undefined
  ); // State untuk ID catatan yang sedang diedit

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const addNote = (title: string, desc: string) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id: number, title: string, desc: string) => {
    const updateNote = noteList.map((note) => {
      if (note.id === id) {
        return { ...note, title: title, desc: desc };
      }
      return note;
    });
    setNoteList(updateNote);
  };

  const deleteNote = (id: number) => {
    const updatedNotes = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotes);
  };

  const handleSetCurrentPage = (page: string, noteId?: number) => {
    setCurrentPage(page);
    setCurrentEditId(noteId);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={handleSetCurrentPage}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote} // Berikan prop ini ke CurrentPageWidget
      currentEditId={currentEditId} // Berikan prop ini ke CurrentPageWidget
    />
  );
}
