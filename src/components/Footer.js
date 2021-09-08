import React from 'react'
import '../styles/footer.css'
export default function Footer() {
    return (
       <div className="footer">
       <h2 class="title text-white fs-3">Follow me on My Social Medias</h2>
 <div class="social-icons">
     <a href="" class="social-icon facebook">
         <span class="icon__inner">
             <i class="fab fa-facebook-f">

             </i>
         </span>
     </a>
     <a href="" class="social-icon twitter">
         <span class="icon__inner">
             <i class="fab fa-twitter">

             </i>
         </span>
     </a>
     <a href="" class="social-icon github">
         <span class="icon__inner">
             <i class="fab fa-github">

             </i>
         </span>
     </a>
     <a href="" class="social-icon gmail">
         <span class="icon__inner">
             <i class="fas fa-envelope">

             </i>
         </span>
     </a>
 </div>
       
       </div>
    )
}
