import React,{useState} from 'react'
import { QuestionCard } from './components/QuestionCard';
import { Result } from './components/Result';
import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";


function App() {
  const [quiz,setQuiz]=useState([])
  const [gameState,setGameState]=useState(null)
  const [currentIndex,setCurrentIndex]=useState(0)

 
   return (
    <div>
      <CssBaseline />
      <Box sx={{
        backgroundColor: lightBlue[500],
        height: "100vh", display: "flex", alignItems: "center"
      }}>
        <Container maxWidth="sm">
         <QuestionCard  />
          <Result />
        </Container>
      </Box>
    </div>
  );
}

export default App;