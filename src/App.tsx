import React from 'react'
import Header from './Header'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Content from './Sections/Content'
import Upload from './Sections/Upload'
import Welcome from './Sections/Welcome'

const App = () => {
    return <div className='app-wrapper'>
        <Header/>
        <Welcome/>
        <Content/>
        <About/>
        <Upload/>
        <Contact/>
    </div>
}

export default App