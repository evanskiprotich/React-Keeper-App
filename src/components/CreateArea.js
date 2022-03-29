import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState(
    {
      title: "",
      content: "",
    },
  );

 function addNote(event){
   const { name, value } = event.target;

   setNote((prevNote) => {
     return {
       ...prevNote,
       [name]: value,
     };
   });
 }

 function submitNote(event){
   
  props.onAdd(note);
  setNote({
    title:'',
    content:''
  })
  event.preventDefault();
   //console.log(note);
 }
  return (
    <div>
      <form>
        <input onChange={addNote} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={addNote} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );

}
export default CreateArea;