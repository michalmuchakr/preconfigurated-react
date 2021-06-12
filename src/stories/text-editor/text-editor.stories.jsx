import React from 'react';
import TextEditor from '../../components/shared/text-editor';
import 'styles/main.scss';

export default {
  title: 'Example/TextEditor',
  component: TextEditor,
};

const Template = () => <TextEditor />;

export const Primary = Template.bind({});
