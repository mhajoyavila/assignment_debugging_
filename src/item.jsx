export default function Item({ completed, id, title, toggleNote, deleteNote }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={(e) => toggleNote(id, e.target.checked)} />
        {title}
      </label>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </li>
  )
}
