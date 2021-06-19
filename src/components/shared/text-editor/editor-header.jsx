import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap';

const EditorHeader = ({fontStyleHandler, handleToggleBlockType}) => {
  return (
    <div className="DraftEditor-header">
      <ButtonGroup size="sm">
        <Button
          className="border-0"
          outline
          onClick={() => fontStyleHandler('BOLD')}
        >
          B
        </Button>
        <Button
          className="border-0"
          outline
          onClick={() => fontStyleHandler('ITALIC')}
        >
          I
        </Button>
        <Button
          className="border-0"
          outline
          onClick={() => fontStyleHandler('UNDERLINE')}
        >
          U
        </Button>
        <Button
          className="border-0"
          outline
          onClick={() => handleToggleBlockType('code-block')}
        >
          code
        </Button>
      </ButtonGroup>
    </div>
  );
};

EditorHeader.propTypes = {
  fontStyleHandler: PropTypes.func,
  handleToggleBlockType: PropTypes.func,
};

export default EditorHeader;
