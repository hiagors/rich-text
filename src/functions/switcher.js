import CustomEditor from "../components/CustomEditor"

export default function switcher (event, editor){
  if (!event.ctrlKey) { return }

  switch (event.key) {
    case ',': {
      event.preventDefault();
      CustomEditor.toggleCodeBlock(editor);
      break
    }

    case 'b': {
      event.preventDefault();
      CustomEditor.toggleBoldMark(editor);
      break
    }

    case 'i': {
      event.preventDefault();
      CustomEditor.toggleItalicMark(editor);
      break
    }

    case 'u': {
      event.preventDefault();
      CustomEditor.toggleUnderlineMark(editor);
      break
    }
  }
}