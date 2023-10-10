import { useEffect, useState } from 'react'
import NewForm from './NewForm'
import NoteList from './list'

import './styles.css'

export default function App() {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(notes))
  }, [notes])

  function handleAddNote(title) {
    setNotes((notes) => {
      return [...notes, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  function toggleNote(id, completed) {
    // console.log(id, completed)
    setNotes((notes) => notes.map((note) => (note.id === id ? { ...note, completed } : note)))
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <>
      <NewForm onAddNote={handleAddNote} />
      <h1 className="header">My Notes</h1>
      <NoteList notes={notes} toggleNote={toggleNote} deleteNote={deleteNote} />
    </>
  )
}
