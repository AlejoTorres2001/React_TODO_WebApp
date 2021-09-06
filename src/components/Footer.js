import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faGoogle,faGithub } from "@fortawesome/free-brands-svg-icons";

import React from 'react'
import '../styles/footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="title-container">

             <h2 className="title">Follow me on My Social Medias</h2>
            </div>
        <div className="social-icons">
     <a href="" className="social-icon facebook">
         <span className="icon__inner">
             <FontAwesomeIcon icon={faFacebook} className="facebook"/>
         </span>
     </a>
     <a href="" className="social-icon twitter">
         <span className="icon__inner">
         <FontAwesomeIcon icon={faTwitter} className="twitter"/>
         </span>
     </a>
     <a href="" className="social-icon github">
         <span className="icon__inner">
         <FontAwesomeIcon icon={faGithub} className="github"/>
         </span>
     </a>
     <a href="" className="social-icon gmail">
         <span className="icon__inner">
         <FontAwesomeIcon icon={faGoogle} className="gmail"/>
         </span>
     </a>
 </div>
        </div>
    )
}
