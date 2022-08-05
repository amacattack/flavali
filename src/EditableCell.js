import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { useTheme } from '@emotion/react';

function EditableCell(props) {
    const theme = useTheme()
    const [value, setValue] = React.useState(props.defaultValue)
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
        <TableCell align={props.align} className="tableCell">
            <input
                type={props.type}
                min="0" 
                max="10"
                onChange={(changeEvent) => setValue(changeEvent.target.value)}
                value={value}
                style={{
                    backgroundColor: 'transparent',
                    outline: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    textAlign: props.align,
                    borderBottom: getBorderBottom(),
                    color: theme.palette.text.primary,
                    fontFamily: theme.typography.fontFamily,
                    textDecoration: 'none',
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false)
                    if (props.onBlur) {
                        props.onBlur(e.target.value)
                    }
                }}
                onMouseEnter={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
            />
        </TableCell>
    )
}

export default EditableCell;
