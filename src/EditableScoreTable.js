import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import EditableCell from './EditableCell';
import { updatePlayerName, updateItemName, updateScoreForItem } from './state';
import {useTheme} from '@emotion/react';

function EditableScoreTable(props) {
    const theme = useTheme()

    // Rendering Player Names on Table
    const renderPlayerNames = () => {
        const playerArray = props.playerNames.map((playerName, playerIdx) =>
            <EditableCell
                defaultValue={playerName}
                key={playerName}
                onBlur={(newPlayerName) => props.dispatch(updatePlayerName(playerIdx, newPlayerName))}
                align={"right"}
            />
        );
        return playerArray;
    }

    // Rendering Food Row on Table 
    const renderFoodRows = () => {
        const foodRows = props.foodRows.map((row, itemIdx) =>
            <TableRow
                key={row.foodName}
            >
                {/* render food name */}
                <EditableCell
                    defaultValue={row.foodName}
                    key={row.foodName}
                    onBlur={(newItemName) => props.dispatch(updateItemName(
                        props.categoryIdx,
                        itemIdx,
                        newItemName
                    ))
                    }
                />

                {/* render scores */}
                {row.playerScores.map((score, scoreIdx) => {
                    return (
                        <EditableCell
                            defaultValue={score}
                            onBlur={(newScore) => props.dispatch(updateScoreForItem(
                                props.categoryIdx,
                                itemIdx,
                                scoreIdx,
                                parseInt(newScore)
                            ))
                            }
                            key={scoreIdx}
                            type={"number"}
                            align={"right"}
                            width={'50'}
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
        <TableContainer component={Paper} className="EditableScoreTable" 
            sx={{backgroundColor: theme.palette.secondary.main, color:theme.palette.text.primary,}}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <EditableCell defaultValue={props.category} onBlur={props.setCategoryName} />
                        {renderPlayerNames()}
                        <TableCell className="averageCell" align={"right"}>Average</TableCell>
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
