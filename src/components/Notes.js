import React, {useRef} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";



const Notes = ({notes, onRemove}) => {
    const inputRef = useRef(null);

   return (
       <TransitionGroup component='ul' className='list-group' >
           {notes.map(note => (
               <CSSTransition key={note.id} classNames={'note'} timeout={800} ref={inputRef}>
                   <li className='list-group-item note' ref={inputRef}>
                       <div ref={inputRef}>
                           <strong>{note.title}</strong>
                           <small>{note.date}</small>
                       </div>
                       <button type="button"
                               className="btn btn-outline-danger btn-sm"
                               onClick={() => onRemove(note.id)}

                       >&times;</button>
                   </li>
               </CSSTransition>

           ))}

       </TransitionGroup>
   )
}




export default Notes;