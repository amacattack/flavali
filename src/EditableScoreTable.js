import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

// ICONS
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    },
    selectTableCell: {
      width: 60
    },
    tableCell: {
      width: 130,
      height: 40
    },
    input: {
      width: 130,
      height: 40
    }
  }));
  
  const createData = (name, player1, player2, average) => ({
    id: name.replace(" ", "_"),
    name,
    player1,
    player2,
    average,
    isEditMode: false
  });
  
  const CustomTableCell = ({ row, name, onChange }) => {
    const classes = useStyles();
    const { isEditMode } = row;
    return (
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
            className={classes.input}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    );
  };
  
  function EditableScoreTable() {
    const [rows, setRows] = React.useState([
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Eclair", 262, 16.0, 24, 6.0)
    ]);
    const [previous, setPrevious] = React.useState({});
    const classes = useStyles();
  
    const onToggleEditMode = id => {
      setRows(state => {
        return rows.map(row => {
          if (row.id === id) {
            return { ...row, isEditMode: !row.isEditMode };
          }
          return row;
        });
      });
    };
  
    const onChange = (e, row) => {
      if (!previous[row.id]) {
        setPrevious(state => ({ ...state, [row.id]: row }));
      }
      const value = e.target.value;
      const name = e.target.name;
      const { id } = row;
      const newRows = rows.map(row => {
        if (row.id === id) {
          return { ...row, [name]: value };
        }
        return row;
      });
      setRows(newRows);
    };
  
    const onRevert = id => {
      const newRows = rows.map(row => {
        if (row.id === id) {
          return previous[id] ? previous[id] : row;
        }
        return row;
      });
      setRows(newRows);
      setPrevious(state => {
        delete state[id];
        return state;
      });
      onToggleEditMode(id);
    };
  
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" />
              <TableCell align="left">CATEGORY</TableCell>
              <TableCell align="left">Player 1</TableCell>
              <TableCell align="left">Player 2</TableCell>
              <TableCell align="left">Average</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.selectTableCell}>
                  {row.isEditMode ? (
                    <>
                      <IconButton
                        aria-label="done"
                        onClick={() => onToggleEditMode(row.id)}
                      >
                        <DoneIcon />
                      </IconButton>
                      <IconButton
                        aria-label="revert"
                        onClick={() => onRevert(row.id)}
                      >
                        <RevertIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      aria-label="delete"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
                <CustomTableCell {...{ row, name: "name", onChange }} />
                <CustomTableCell {...{ row, name: "player1", onChange }} />
                <CustomTableCell {...{ row, name: "player2", onChange }} />
                <CustomTableCell {...{ row, name: "average", onChange }} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
export default EditableScoreTable;
  