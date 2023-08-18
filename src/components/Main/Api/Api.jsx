import React, {useEffect, useRef, useState} from 'react'
import styles from './Api.module.css'
import Search from "./Search/Search";
import Content from "./Content/Content";


const Api = () => {



   return (
       <div className={styles.api}>
           <Search />
           <Content />
       </div>
   )



}

export default Api