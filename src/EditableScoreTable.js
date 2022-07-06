import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import EditableCell from './EditableCell';
import {updatePlayerName} from './state';

function EditableScoreTable(props) {

    // Rendering Player Names on Table
    const renderPlayerNames = () => {
        const playerArray = props.playerNames.map((playerName, playerIdx) =>
            <EditableCell
                value={playerName}
                key={playerName}
                onChange={(newPlayerName) => props.dispatch(updatePlayerName(playerIdx, newPlayerName))}
                align={"right"}
            />
        );
        return playerArray;
    }

    // Rendering Food Row on Table 
    const renderFoodRows = () => {
        const foodRows = props.foodRows.map((row) =>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={row.foodName}
            >
                {/* render food name */}
                <EditableCell
                    value={row.foodName}
                    key={row.foodName}
                />

                {/* render scores */}
                {row.playerScores.map((scores, index) => {
                    console.log(scores)
                    return (
                        <EditableCell
                            value={scores}
                            key={index}     
                            type={"number"}
                            align={"right"}
                        />
                    )
                })
                }

                {/* render average score for food */}
                <TableCell
                    key={row.average}
                    align={"right"}
                >
                    {row.average}
                </TableCell>
            </TableRow>
        );
        return foodRows;
    }

    return (
        <TableContainer component={Paper} className="EditableScoreTable">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                      <EditableCell value={props.category} onChange={props.setCategoryName}/>
                        {renderPlayerNames()}
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderFoodRows()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EditableScoreTable;
