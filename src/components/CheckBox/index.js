import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";

export default function MyCheckBox(props) {
  const {checkbox} = useStyles();

  return (
      <Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checkbox}
        color='#fdcf08'
        {...props}
      />
  );
}
