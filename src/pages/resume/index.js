import React, { useEffect } from 'react'
import Link from 'next/link'


const index = () => {

    useEffect(() => {
        // window.location.href = 'https://drive.google.com/uc?export=download&id=1SHx_cUayGr_9kuuN24OUlUAgZM8JfjJl'
    }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem' }}>
        <h1 style={{ fontSize: '50px', width: '70vw' }} >
            My resume must be downloading now. You can also take a look at my projects in my  
            <Link href={'/'}>
                <a style={{ display: "inline", alignItems: 'center', color: 'white', marginBottom: '20px', textDecorationLine: 'underline' }}>
                {/* <DiCssdeck size="3rem" /> */} <span>Portfolio</span> 
                </a>
            </Link>
        </h1>
    </div>
  )
}

export default index