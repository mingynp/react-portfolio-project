import React from 'react'
import styles from './Testimonails.module.css'

function Testimonails() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonails</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos recusandae amet modi aspernatur maxime rem quidem reprehenderit.
                </p>
                <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <h4>john Doe</h4>
                <p className={styles.bio}>web dep</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos recusandae amet modi aspernatur maxime rem quidem reprehenderit.
                </p>
                <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <h4>john Doe</h4>
                <p className={styles.bio}>web dep</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos recusandae amet modi aspernatur maxime rem quidem reprehenderit.
                </p>
                <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <h4>john Doe</h4>
                <p className={styles.bio}>web dep</p>
            </div>
            
        </div>
    </div>
  )
}

export default Testimonails
