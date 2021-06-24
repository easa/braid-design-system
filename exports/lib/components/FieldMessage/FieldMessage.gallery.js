import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { FieldMessage } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Critical',
    Example: function Example(_ref) {
      const id = _ref.id;
      return source(
        /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'critical',
          message: 'This is a critical message.',
        }),
      );
    },
  },
  {
    label: 'Positive',
    Example: function Example(_ref2) {
      const id = _ref2.id;
      return source(
        /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'positive',
          message: 'This is a positive message.',
        }),
      );
    },
  },
  {
    label: 'Neutral',
    Example: function Example(_ref3) {
      const id = _ref3.id;
      return source(
        /* #__PURE__*/ _jsx(FieldMessage, {
          id,
          tone: 'neutral',
          message: 'This is a neutral message.',
        }),
      );
    },
  },
];