import React, {useState} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import EditorHeader from './editor-header';
import './text-editor.scss';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const boldHandler = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  return (
    <>
      <EditorHeader boldHandler={boldHandler} />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        toolbar={{
          inline: {inDropdown: true},
          list: {inDropdown: true},
          textAlign: {inDropdown: true},
          link: {inDropdown: true},
          history: {inDropdown: true},
        }}
      />
    </>
  );
};

export default TextEditor;
