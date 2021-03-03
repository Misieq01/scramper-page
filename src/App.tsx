import React from 'react'
import Header from './Sections/Header'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Content from './Sections/Content'
import Upload from './Sections/Upload'
import Welcome from './Sections/Welcome'

const App = () => {
    return <div className='app-wrapper-flex'>
        <div className='app-wrapper-size'>
            <Header/>
            <Welcome/>
            <Content/>
            <About/>
            <Upload/>
            <Contact/>
        </div>
    </div>
}

export default App