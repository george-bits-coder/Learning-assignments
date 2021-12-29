
import image1 from "./logo.png"
import("./index.css");


var logoelement=document.getElementById("logo_image");
logoelement.src=image1;
logoelement.style.height="50px";
logoelement.style.width="50px";
var ele=document.createElement("h4");
ele.textContent="happy notetaking";

document.body.appendChild(ele);

var submitnote=document.getElementById("submit_note");



var titles=JSON.parse(localStorage.getItem("note_titles"));
var notes= JSON.parse(localStorage.getItem("notes"));

//initializes notes in the beginning
function initialize_notes(){

    
    var rightbox=document.getElementById("right_container");
    rightbox.textContent=" Your Notes";
    if(!titles)
    {
        localStorage.setItem("note_titles",JSON.stringify([]));
        localStorage.setItem("notes",JSON.stringify([]));

        rightbox.textContent="Notes are empty";
    }
    else{

        var rightbox=document.getElementById("right_container");
        var ind=0;
        titles.forEach(function(el){

            let text_item=document.createElement("button");
            text_item.textContent=el;
            let maincontent=document.createElement("p");
            
            maincontent.textContent=notes[ind];
            ind++;
            maincontent.style.display="none";
            text_item.onclick=function(){
               
                if( maincontent.style.display=="block")
                maincontent.style.display="none";
                else
                maincontent.style.display="block";
            }
            var textdiv=document.createElement("div");
            textdiv.appendChild(text_item);
            textdiv.appendChild(maincontent);
           
            rightbox.appendChild(textdiv);
        });

     
       
    }

}

initialize_notes();
function savenotes()
{

    var titl=document.getElementById("T");
    var bod=document.getElementById("B");
    var t1="Title "+titles.length+" - "+titl.value;
   if(!titl.value || !bod.value)
   alert("empty notes? Add some content maybe?");
   else{
                titles.push(t1);
                notes.push(bod.value);
                console.log(titles);
                console.log(notes);
                localStorage.setItem("note_titles",JSON.stringify(titles));
                localStorage.setItem("notes",JSON.stringify(notes));
                alert("note saved successfully");
                initialize_notes();
        }

};

submitnote.onclick=function temp()
{

  
    savenotes();



}
