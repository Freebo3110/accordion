import { AccordionIrem } from "./AccordionIrem"
import { list } from "./list"
import "./style.css";

export const Accordion =()=>{
    return(<div>
        {list.map((item,index)=>
        <AccordionIrem key={index} title={item.title} content={item.content}/>
        )}
    </div>
)}