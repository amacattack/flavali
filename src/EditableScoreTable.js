import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function EditableCell(props) {
    const [text, setText] = React.useState(props.defaultValue)
    const [isFocused, setIsFocused] = React.useState(false)
    const [mouse, setMouse] = React.useState(false)

    const getBorderBottom = () => {
        if (isFocused || mouse) {
            return '2px solid black';
        } else {
            return 'none';
        }
    }

    return (
        <TableCell align={props.align}>
            <input
                type={props.type}
                min="0" 
                max="10"
                onChange={(changeEvent) => {
                    setText(changeEvent.target.value);
                }}
                value={text}
                style={{
                    backgroundColor: 'transparent',
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    textAlign: props.align,
                    borderBottom: getBorderBottom(),
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseEnter={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
            />
        </TableCell>
    )
}

function EditableScoreTable() {

    // return (
    //     <TableContainer component={Paper} className="EditableScoreTable">
    //         <Table aria-label="simple table">
    //             <TableHead>
    //                 <TableRow>
    //                     <EditableCell defaultValue={"CATEGORY"} />
    //                     <EditableCell defaultValue={"Player 1"} align={"right"} />
    //                     <EditableCell defaultValue={"Player 2"} align={"right"} />
    //                     <TableCell align={"right"}>Average</TableCell>
    //                 </TableRow>
    //             </TableHead>
    //             <TableBody>
    //                 <TableRow
    //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                 >
    //                     <EditableCell defaultValue={"Item 1"} />
    //                     <EditableCell defaultValue={0.0} type={"number"} align="right" />
    //                     <EditableCell defaultValue={0.0} type={"number"} align="right" />
    //                     <TableCell align={"right"}>Average</TableCell>
    //                 </TableRow>
    //                 <TableRow
    //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                 >
    //                     <EditableCell defaultValue={"Item 2"} />
    //                     <EditableCell defaultValue={0.0} type={"number"} align="right" />
    //                     <EditableCell defaultValue={0.0} type={"number"} align="right" />
    //                     <TableCell align={"right"}>Average</TableCell>
    //                 </TableRow>    
    //             </TableBody>
    //         </Table>
    //     </TableContainer>
    // )


    return (
        <TableContainer component={Paper} className="EditableScoreTable">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <EditableCell defaultValue={"CATEGORY"} />
                        <EditableCell defaultValue={"Player 1"} align={"right"} />
                        <EditableCell defaultValue={"Player 2"} align={"right"} />
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <EditableCell defaultValue={"Item 1"} />
                        <EditableCell defaultValue={0.0} type={"number"} align="right" />
                        <EditableCell defaultValue={0.0} type={"number"} align="right" />
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <EditableCell defaultValue={"Item 2"} />
                        <EditableCell defaultValue={0.0} type={"number"} align="right" />
                        <EditableCell defaultValue={0.0} type={"number"} align="right" />
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>    
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default EditableScoreTable;
