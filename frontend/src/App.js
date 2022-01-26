import './App.css';
import { BlogPost } from './components/posts';
import { Container } from "react-bootstrap"


export function App() {
  return (
    <Container className="App">
      <header className="App-header">
           

        <BlogPost />
      </header>
    </Container>
  );
}


