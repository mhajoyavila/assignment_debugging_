import Item from './item'

export default function NoteList({ notes, toggleNote, deleteNote }) {
  return <ul className="list">{notes.length > 0 ? notes.map((note) => <Item {...note} key={note.id} toggleNote={toggleNote} deleteNote={deleteNote} />) : 'No notes'}</ul>
}
