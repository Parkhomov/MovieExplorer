import "./css/MovieCard.css";
import React, { useState } from 'react';

function MCard() {
    
    return (
        <>
            
        </>
    )
};

export default MCard;






// class ButtonElement {
//     text;
//     className;
//     role;
//     type = "button";
//     constructor(text, className) {
//         this.text = text;
//         this.className = className;
//         this.role = "button";
//     }
//     create() {
//         const button = document.createElement("button");
//         button.textContent = this.text;
//         button.setAttribute("role", this.role);
//         button.setAttribute("type", this.type);
//         this.className.forEach(item => button.classList.add(item));
//         return button;
//     }
// }
// const b_03 = new ButtonElement("Push me", ["btn", "btn-primary"]);
// console.log(b_03);
// document.body.append(b_03.create());