import * as React from 'react';
import TableCell from '@mui/material/TableCell';

function EditableCell(props) {
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
                  changeEvent.preventDefault();
                  if (props.onChange !== undefined) {
                    const changedText = changeEvent.target.value
                    props.onChange(changedText);
                  }
                }}
                value={props.value}
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
