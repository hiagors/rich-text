import React from 'react';
import {CodeElement, DefaultElement, LeafElement} from '../elements';


const render = {
  
  renderElement (props)  {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  },
  
  renderLeaf (props) {
    return <LeafElement {...props} />
  }, 

}

export default render;