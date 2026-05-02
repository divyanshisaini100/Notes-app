let editNotesId = null;

const addbtn = document.querySelectorAll(".add");

const popup = document.querySelector(".popup");


let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

const container = document.querySelector(".notes_list");

renderNotes();

function renderNotes(){
    
    container.innerHTML = "";
    notesArray.forEach(note => {
        addNoteToUI(note);
    });
}
// addbtn is a NODELIST so addEventListener won't work!

// addbtn.addEventListener("click", ()=>{
//     popup.classList.remove("hidden");
// });
document.addEventListener("click", (e)=>{
    if(e.target.closest(".add")){
        console.log("Add button clicked")
        editNotesId = null;
        popup.classList.remove("hidden");
    }
});


const savebtn = document.querySelector("#savebtn");

savebtn.addEventListener("click", ()=>{
    const id = Date.now();
    const title = document.querySelector("#title").value ;
    const content = document.querySelector("#content").value ;
    const time = new Date().toLocaleString();
    
    if(editNotesId !== null){
         const note = notesArray.find(n => n.id===editNotesId);
         if(!note) return;
         note.title = title;
         note.content = content;
         note.time = time;


         editNotesId = null;
    }
    
    else {
        const note = {id, title, content, time};

        notesArray.push(note);

        // title = "";
        // content = "";
        // time = "";
    }
    document.querySelector("#title").value = "";
    document.querySelector("#content").value = "";
       
    localStorage.setItem("notes", JSON.stringify(notesArray));

    renderNotes();
    
    popup.classList.add("hidden");
})

function addNoteToUI(note){
    
    const div = document.createElement("div");
    div.dataset.id = note.id;
    
    const firstLine = note.content.split("\n")[0];
    div.innerHTML = `
    <div class="view">
    <h3>${note.title.toUpperCase()}</h3>
    <h5>${firstLine}...</h5>
    
    </div>
    <div class="note-end">
    <div class="tools">
      <button type="button" class="edit1"><img src="pen.png" alt="-" class="edit_btn"></button>
      <button type="button" class="delete1"><img src="bin.png" alt="-" class="delete_btn"></button>
    </div>    
    <div class="lastedited">
      <small>Last Edited: ${note.time} </small>
    </div>
    </div>
    `;
    div.classList.add("notes");

    container.appendChild(div);

}

document.addEventListener("click", (e)=>{

   if(e.target.closest(".delete1")){

    console.log("Delete Button Clicked");

    const note = e.target.closest(".notes");
    const id = Number(note.dataset.id);

    notesArray = notesArray.filter(note => note.id!==id);
    
    localStorage.setItem("notes", JSON.stringify(notesArray));

    renderNotes();

   }

   if(e.target.closest(".edit1")){

    const note = e.target.closest(".notes");

    const id = Number(note.dataset.id);

    console.log("Edit Button Clicked");
    console.log("ID : ", id);
    console.log("notesArray : ", notesArray);

   

    editNotesId = id;
    
    let n = notesArray.find(note => note.id === id);

    const title_selected = document.getElementById("title");
    const content_selected = document.getElementById("content");
    
    title_selected.value = n.title;
    content_selected.value = n.content;

    popup.classList.remove("hidden");
    
   }
});

