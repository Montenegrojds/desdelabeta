import './App.css';
import { BlogPost } from './components/posts';
import { Container } from "react-bootstrap"
function App() {
  return (
    <Container className="App">
      <header className="App-header">
        
        <p>
          desdelabeta.com
        </p>
        
        <BlogPost />
      </header>
    </Container>
  );
}

export default App;
