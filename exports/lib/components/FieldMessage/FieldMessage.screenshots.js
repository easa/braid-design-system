import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { FieldMessage } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Critical Field Message',
      Example: function Example(_ref) {
        const id = _ref.id;
        return /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'critical',
          message: 'This is a critical message.',
        });
      },
    },
    {
      label: 'Positive Field Message',
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'positive',
          message: 'This is a positive message.',
        });
      },
    },
    {
      label: 'Critical with long (wrapping) message',
      Container: function Container(_ref3) {
        const children = _ref3.children;
        return /* #__PURE__*/ _jsx(
          'div',
          {
            style: {
              maxWidth: '300px',
            },
          },
          void 0,
          children,
        );
      },
      Example: function Example(_ref4) {
        const id = _ref4.id;
        return /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'critical',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla.',
        });
      },
    },
  ],
};