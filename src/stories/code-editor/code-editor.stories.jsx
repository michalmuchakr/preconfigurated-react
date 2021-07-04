import React from 'react';
import CodeEditor from '../../components/shared/code-editor';
import '../soft-bastion-ui/src/styles/main.scss';

export default {
  title: 'Example/CodeEditor',
  component: CodeEditor,
};

const Template = () => <CodeEditor />;

export const Primary = Template.bind({});
