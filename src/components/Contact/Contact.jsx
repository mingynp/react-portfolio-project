import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, sapiente?
                </p>
                <p className={styles.contact_address}>
                    123 Main Street <br/>
                    Bangkok, Thailand
                </p>
                <p className={styles.contact_address}>
                    123 Main Street <br/>
                    Bangkok, Thailand
                </p>
                <p><FaPhone/> (+66) 98 555 1234</p>
                <br/>
                <p><FaEnvelope/> support@site.com</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="First name">First name</label>
                            <input type="text" placeholder='eg. John' />
                        </div>
                        <div>
                            <label htmlFor="Last name">Last name</label>
                            <input type="text" placeholder='eg. Doe' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. johndoe@gmail.com' />
                    <label htmlFor="massage">Your massage</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>     
        </div>
    </div>
  )
}

export default Contact