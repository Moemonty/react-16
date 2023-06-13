import React, { useContext, Fragment, useState } from "react";
import { ThemeContext } from "../App";

export default function Select() {
  const [themeValue, setThemeValue] = useState('');
  const theme = useContext(ThemeContext);



  return (
    <Fragment>
      <h3>Theme Value: {themeValue ? themeValue : theme}</h3>
      <select
        value={themeValue}
        onChange={event => setThemeValue(event.target.value)}
        >
        <option value='Dark'>Dark</option>
        <option value='Light'>Light</option>
        <option value='Grey'>Grey</option>
      </select>      
    </Fragment>
  );
}