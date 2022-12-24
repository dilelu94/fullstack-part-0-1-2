import Note from "./Components/Note"

const App = ({ notes }) => {
  /*   
  const result = notes.map(note => note.id)
  console.log(result) 
  */

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App

/* 
<ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul> 
*/