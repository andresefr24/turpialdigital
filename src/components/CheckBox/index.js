import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";

export default function MyCheckBox() {
  const [checked, setChecked] = useState(false);

  const {checkbox} = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checkbox}
        color='#fdcf08'
      />
    </div>
  );
}
