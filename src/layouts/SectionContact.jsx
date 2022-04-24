import React from 'react'
import "../styles/SectionContact.scss"
import image from "../images/277946853_936287893722122_7862833761202753997_n.jpg"

const SectionContact = () => {
    return(
       
        <div className="container_sectionContact">
            <h1 className='title_sectionContact'>Contact</h1>

            <div className="form_sectionContact">
               
                    <form className='form'>
                        <div className="input-group">
                            <input type="text" className='form-control' placeholder='Name and surname' />
                        </div>
                        <div className="input-group">
                            <input type="text" className='form-control' placeholder='E-mail adress' />
                        </div>
                        <div className="input-group">
                            <textarea className="form-control" placeholder='Text message' rows="6"></textarea>
                        </div>
                        <button className="form_btn">Send</button> 
                    </form>
              
            <div className="contact_info">


                <div className="contact_adress">
                    <h3>Adress: </h3>
                    <p><i className='bi bi-geo-alt'></i>Ul. Lili Wenedy 1 <br /> 30-833 Kraków</p>
                    <p><i className='bi bi-phone'></i>+48 669 093 431</p>
                    <p><i className='bi bi-at'></i>Patryk.Luszcz@outlook.com</p>
                </div>

            <div className="contact_image">
                    <img src={image} alt="Patryk Łuszcz" />
            </div>
            </div>
                
            </div>
        </div>
        
       
    )
}

export default SectionContact;