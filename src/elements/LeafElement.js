import React from 'react';

const LeafElement = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal',
               fontStyle: props.leaf.italic ? 'italic' : 'normal',
               textDecoration: props.leaf.underline ? 'underline' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

export default LeafElement;