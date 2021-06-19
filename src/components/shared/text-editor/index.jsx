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

  const fontStyleHandler = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleToggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div className="DraftEditor">
      <EditorHeader
        fontStyleHandler={fontStyleHandler}
        handleToggleBlockType={handleToggleBlockType}
      />
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
    </div>
  );
};

export default TextEditor;
