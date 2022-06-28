import * as React from 'react';
import TableCell from '@mui/material/TableCell';

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

export default EditableCell;