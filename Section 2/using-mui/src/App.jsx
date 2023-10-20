import { Badge, Button, Container, Switch, TextField } from "@mui/material"

const App = () => {
  return (
    <div>
      <Container>
        <h1>Using Material UI</h1>

        <Button>MUI Button</Button>
        <Button variant="contained" color="secondary" size="small" >Button style 1</Button>

        <Badge badgeContent={'New'} color="primary">
          <Button variant="outlined" color="error" >Button style 2</Button>
        </Badge>

        <TextField
          label="Email Address"
          fullWidth
          sx={{ mt: 5 }}
          variant="filled"
          helperText="Enter valid email address"
        />

        <Switch color="warning" />

      </Container>
    </div>
  )
}

export default App