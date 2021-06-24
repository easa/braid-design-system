import _jsx from '@babel/runtime/helpers/jsx';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import React from 'react';
import parseHighlights from 'autosuggest-highlight/parse';
import { Highlight } from './Highlight/Highlight';
export var formatRanges = function formatRanges(value, highlightRanges) {
  if (highlightRanges && value) {
    let lastEnd = 0;
    const validatedAndSortedRanges = highlightRanges // sort ranges by start index
      .sort(function (a, b) {
        return a.start > b.start ? 1 : -1;
      })
      .reduce(function (acc, _ref) {
        const end = _ref.end,
          start = _ref.start;
        const resolvedEnd = end || value.length; // skip range if end character is less than start character

        if (resolvedEnd <= start) {
          return acc;
        } // handle overlapping ranges

        const adjustedRange = [];

        if (resolvedEnd > lastEnd) {
          adjustedRange.push({
            // if overlapping, start from end of last range otherwise start from specified range
            start: start < lastEnd ? lastEnd : start,
            end,
          });
          lastEnd = resolvedEnd;
        }

        return [].concat(_toConsumableArray(acc), adjustedRange);
      }, []);
    return parseHighlights(
      value,
      validatedAndSortedRanges.map(function (_ref2) {
        const start = _ref2.start,
          end = _ref2.end;
        return [start, end || value.length];
      }),
    ).reduce(function (acc, _ref3, i) {
      const text = _ref3.text,
        highlight = _ref3.highlight;

      if (text) {
        acc.push(
          highlight ? /* #__PURE__*/ _jsx(Highlight, {}, i, text) : text,
        );
      }

      return acc;
    }, []);
  }

  return [value];
};