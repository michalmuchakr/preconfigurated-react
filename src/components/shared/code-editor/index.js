import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react';

import React from 'react';

const CodeEditor = () => {
  return (
    <Editor height="90vh" defaultLanguage="javascript" defaultValue="Sth" />
  );
};

export default CodeEditor;
