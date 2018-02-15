'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.winner = false;
    _this.red = 1;
    _this.black = 2;
    _this.state = {
      row1: [0, 0, 0, 0],
      row2: [0, 0, 0, 0],
      row3: [0, 0, 0, 0],
      row4: [0, 0, 0, 0]
    };
    _this.togglePiece.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'togglePiece',
    value: function togglePiece(e) {
      e.preventDefault();
      this.setState(this.state.row1.push(1));
      // get value of spot clicked
      // match value with row/col location
      // change state of row/col
      // detect win or tie for: horizontal, vertical, diagonal and ties
      // display message
    }

    // diagonal: [ [ row1[0], row2[1], row3[2], row4[3] ] , [ row1[3], row2[2], row3[1], row4[0] ] ],
    // verticals: [ [ row1[0], row2[0], row3[0], row4[0] ], [ row1[1], row2[1], row3[1], row4[1] ], [ row1[2], row2[2], row3[2], row4[2] ], 
    // [ row1[3], row2[3], row3[3], row4[3] ] ]
    // horizontal: [ ]


  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'grid-item', onClick: function onClick() {
          _this2.togglePiece(e);
        } });
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('board'));

exports.app = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ3aW5uZXIiLCJyZWQiLCJibGFjayIsInN0YXRlIiwicm93MSIsInJvdzIiLCJyb3czIiwicm93NCIsInRvZ2dsZVBpZWNlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHVzaCIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsVUFBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQURLO0FBRVhDLFlBQU0sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBRks7QUFHWEMsWUFBTSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FISztBQUlYQyxZQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUDtBQUpLLEtBQWI7QUFNQSxVQUFLQyxXQUFMLENBQWlCQyxJQUFqQjtBQVhpQjtBQVlsQjs7OztnQ0FFV0MsQyxFQUFHO0FBQ2JBLFFBQUVDLGNBQUY7QUFDQSxXQUFLQyxRQUFMLENBQWMsS0FBS1QsS0FBTCxDQUFXQyxJQUFYLENBQWdCUyxJQUFoQixDQUFxQixDQUFyQixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkFHUztBQUFBOztBQUNQLGFBQ0UsdUNBQUssV0FBVSxXQUFmLEVBQTJCLFNBQVMsbUJBQU07QUFBQyxpQkFBS0wsV0FBTCxDQUFpQkUsQ0FBakI7QUFBb0IsU0FBL0QsR0FERjtBQUdEOzs7O0VBbkNlLGdCQUFNSSxTOztBQXNDeEIsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUF6Qjs7UUFJU0MsRyxHQUFBQSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLndpbm5lciA9IGZhbHNlO1xuICAgIHRoaXMucmVkID0gMTtcbiAgICB0aGlzLmJsYWNrID0gMjtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHJvdzE6IFswLDAsMCwwXSwgXG4gICAgICByb3cyOiBbMCwwLDAsMF0sIFxuICAgICAgcm93MzogWzAsMCwwLDBdLCBcbiAgICAgIHJvdzQ6IFswLDAsMCwwXVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVQaWVjZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlUGllY2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUucm93MS5wdXNoKDEpKTtcbiAgICAvLyBnZXQgdmFsdWUgb2Ygc3BvdCBjbGlja2VkXG4gICAgLy8gbWF0Y2ggdmFsdWUgd2l0aCByb3cvY29sIGxvY2F0aW9uXG4gICAgLy8gY2hhbmdlIHN0YXRlIG9mIHJvdy9jb2xcbiAgICAvLyBkZXRlY3Qgd2luIG9yIHRpZSBmb3I6IGhvcml6b250YWwsIHZlcnRpY2FsLCBkaWFnb25hbCBhbmQgdGllc1xuICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxuICB9XG5cbiAgLy8gZGlhZ29uYWw6IFsgWyByb3cxWzBdLCByb3cyWzFdLCByb3czWzJdLCByb3c0WzNdIF0gLCBbIHJvdzFbM10sIHJvdzJbMl0sIHJvdzNbMV0sIHJvdzRbMF0gXSBdLFxuICAvLyB2ZXJ0aWNhbHM6IFsgWyByb3cxWzBdLCByb3cyWzBdLCByb3czWzBdLCByb3c0WzBdIF0sIFsgcm93MVsxXSwgcm93MlsxXSwgcm93M1sxXSwgcm93NFsxXSBdLCBbIHJvdzFbMl0sIHJvdzJbMl0sIHJvdzNbMl0sIHJvdzRbMl0gXSwgXG4gIC8vIFsgcm93MVszXSwgcm93MlszXSwgcm93M1szXSwgcm93NFszXSBdIF1cbiAgLy8gaG9yaXpvbnRhbDogWyBdXG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWl0ZW0nIG9uQ2xpY2s9eygpID0+IHt0aGlzLnRvZ2dsZVBpZWNlKGUpfX0+PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJykpO1xuXG5cblxuZXhwb3J0IHsgYXBwIH1cblxuXG5cblxuXG5cbiJdfQ==