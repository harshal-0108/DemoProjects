import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'

function App() {
  return (
    <div style={{ padding: "40px" }}>
      
      <h1>MUI Icons Working ✅</h1>

      <Button
        variant="contained"
        startIcon={<HomeIcon />}
      >
        Home
      </Button>

    </div>
  )
}

export default App