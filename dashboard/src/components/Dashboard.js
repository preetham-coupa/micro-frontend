// src/components/Dashboard.js
import React from "react";
import {
  Container,
  Paper,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(2, 0),
  },
  table: {
    marginTop: theme.spacing(4),
  },
  progress: {
    marginTop: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Dashboard Panel
        </Typography>
        <FormControlLabel
          className={classes.formControl}
          control={<Checkbox name="checkbox1" color="primary" />}
          label="Sample Checkbox"
        />
        <Select className={classes.formControl} displayEmpty fullWidth>
          <MenuItem value="">
            <em>--Choose an option--</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
        </Select>
        <TextField
          className={classes.formControl}
          label="Type something"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.formControl}
        >
          Click Me
        </Button>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>28</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>34</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom className={classes.progress}>
          Chart Placeholder
        </Typography>
        <LinearProgress variant="determinate" value={50} />
      </Paper>
    </Container>
  );
};

export default Dashboard;
