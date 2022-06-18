// FIRST TABLE 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input } from '@mui/material';

function EditableCell() {
    const [category, setCategory] = React.useState("CATEGORY")
    const [isFocused, setIsFocused] = React.useState(false)

    const getBorderBottom = () => {
        if (isFocused) {
            return '2px solid black'
        } else {
            return 'none'
        }
    }

    return (
        <TableCell>
            <input
                value={category}
                onChange={(changeEvent) => {
                    setCategory(changeEvent.target.value)
                }}
                style={{
                    backgroundColor: 'transparent',
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    borderBottom: getBorderBottom(),
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            // TODO: when mouse enters the editable cell, show the bottom border
            // TODO: when mouse leaves the editable cell, don't show the bottom border
            // TODO: onMouseEnter={}
            // TODO: onMouseLeave={}
            />
        </TableCell>
    )
}

function MaterialEditableScoreTable() {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <EditableCell />
                        <TableCell align="right">Player 1</TableCell>
                        <TableCell align="right">Player 2</TableCell>
                        <TableCell align="right">Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            yogurt
                        </TableCell>
                        <TableCell align="right">{8}</TableCell>
                        <TableCell align="right">{2}</TableCell>
                        <TableCell align="right">{5}</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            mazapan
                        </TableCell>
                        <TableCell align="right">{9}</TableCell>
                        <TableCell align="right">{8}</TableCell>
                        <TableCell align="right">{8.5}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MaterialEditableScoreTable;