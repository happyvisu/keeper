import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    
    const [isExpanded, setExpanded] = useState(false)
    const [note , setNote] = useState ({
        title:"",
         content:""
    })   

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
        });

    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
             content:""});
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input onChange={handleChange} 
                    onClick={expand} 
                    name="title" 
                    value={note.title} 
                    placeholder="Title"/>)}

                <textarea 
                    onChange={handleChange} 
                    onClick={expand}
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} />

                <Zoom in={isExpanded}>                
                    <Fab onClick={submitNote}>                    
                        <AddIcon />
                    </Fab> 
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;