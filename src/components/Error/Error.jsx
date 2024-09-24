/*import React from 'react'*/

export const Error = ({ error }) => {
  return <div>{error && <p style={{ color: 'red' }}> Ha pasado un error</p>}</div>;
};
