import * as React from 'react';

function EditableGameName(props) {
    const [text, setText] = React.useState("GAME NAME");
    const [isFocused, setIsFocused] = React.useState(false);
    const [mouse, setMouse] = React.useState(false);

    const getBorderBottom = () => {
        if (isFocused || mouse) {
            return '2px solid black';
        } else {
            return 'none';
        }
    }

    return (
        <input className="EditableGameName"
            onChange={(changeEvent) => {
                setText(changeEvent.target.value);
            }}
            value={text}
            style={{
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                borderBottom: getBorderBottom(),
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
        />
    )
}


export default EditableGameName;