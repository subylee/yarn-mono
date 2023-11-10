import Image from 'next/image'
import styles from './page.module.css'

import React, {useEffect} from "react";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
            <main id="main" role="main">
                <Intro />
                
            </main>
        </>
  )
}
