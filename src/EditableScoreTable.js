import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import EditableCell from './EditableCell';

function EditableScoreTable(props) {

    // Rendering Player Names on Table
    function renderPlayerNames() {
        const playerArray = [];

        props.playerNames.forEach((player) => {
            playerArray.push(
                <EditableCell
                    defaultValue={player}
                    key={player}
                    align={"right"}
                />
            );
        })
        return playerArray;
    }
    

    return (
        <TableContainer component={Paper} className="EditableScoreTable">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <EditableCell defaultValue={props.category} />
                        {renderPlayerNames()}
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <EditableCell defaultValue={"Item 1"} />
                        <EditableCell defaultValue={0.0} type={"number"} align={"right"} />
                        <EditableCell defaultValue={0.0} type={"number"} align={"right"} />
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

//     return (
//         <TableContainer component={Paper} className="EditableScoreTable">
//             <Table aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <EditableCell defaultValue={"CATEGORY"} />
//                         <EditableCell defaultValue={"Player 1"} align={"right"} />
//                         <EditableCell defaultValue={"Player 2"} align={"right"} />
//                         <TableCell align={"right"}>Average</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     <TableRow
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                         <EditableCell defaultValue={"Item 1"} />
//                         <EditableCell defaultValue={0.0} type={"number"} align="right" />
//                         <EditableCell defaultValue={0.0} type={"number"} align="right" />
//                         <TableCell align={"right"}>Average</TableCell>
//                     </TableRow>
//                     <TableRow
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                         <EditableCell defaultValue={"Item 2"} />
//                         <EditableCell defaultValue={0.0} type={"number"} align="right" />
//                         <EditableCell defaultValue={0.0} type={"number"} align="right" />
//                         <TableCell align={"right"}>Average</TableCell>
//                     </TableRow>    
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     )
// }


export default EditableScoreTable;
