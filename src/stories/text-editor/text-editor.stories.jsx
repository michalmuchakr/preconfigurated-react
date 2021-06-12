import TextEditor from 'components/shared/text-editor';
import ThemeWrapper from '../shared/theme-wrapper';
import React from 'react';

export default {
  title: 'Example/TextEditor',
  component: TextEditor,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

const Template = (args) => <TextEditor {...args} />;

export const Basic = Template.bind({});
