
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmarks/Bookmars'

function App() {
 

  return (
    <> 
    <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Bookmars></Bookmars>
      </div>
    </>
  )
}

export default App
