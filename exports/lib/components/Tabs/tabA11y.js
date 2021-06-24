const getTabLabelId = function getTabLabelId(uniqueId, index) {
  return ''.concat(uniqueId, '_').concat(index + 1, '_label');
};

const getPanelId = function getPanelId(uniqueId, index) {
  return ''.concat(uniqueId, '_').concat(index + 1, '_panel');
};

export default (function (_ref) {
  const uniqueId = _ref.uniqueId;
  return {
    tabListProps: function tabListProps(_ref2) {
      const label = _ref2.label;
      return {
        role: 'tablist',
        'aria-orientation': 'horizontal',
        'aria-label': label,
      };
    },
    tabProps: function tabProps(_ref3) {
      const tabIndex = _ref3.tabIndex,
        isSelected = _ref3.isSelected;
      return {
        role: 'tab',
        tabIndex: isSelected ? undefined : -1,
        'aria-selected': isSelected,
        'aria-controls': getPanelId(uniqueId, tabIndex),
        id: ''.concat(uniqueId, '_').concat(tabIndex + 1),
      };
    },
    tabLabelProps: function tabLabelProps(_ref4) {
      const tabIndex = _ref4.tabIndex;
      return {
        id: getTabLabelId(uniqueId, tabIndex),
      };
    },
    tabPanelProps: function tabPanelProps(_ref5) {
      const panelIndex = _ref5.panelIndex,
        isSelected = _ref5.isSelected;
      return {
        role: 'tabpanel',
        'aria-labelledby': getTabLabelId(uniqueId, panelIndex),
        'aria-hidden': isSelected ? undefined : true,
        id: getPanelId(uniqueId, panelIndex),
        tabIndex: isSelected ? 0 : undefined,
      };
    },
  };
});