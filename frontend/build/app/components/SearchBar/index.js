var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import '../../style.local.css';
import style from '../../style.local.css';
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showGoButton: false,
            showNavigationBar: false,
        };
        _this.onSearchFocus = function (event) {
            _this.setState({
                showGoButton: true,
            });
        };
        _this.onSearchBlur = function (event) {
            _this.setState({
                showGoButton: false,
            });
        };
        _this.onOpenNavigationBar = function (event) {
            _this.setState({
                showNavigationBar: true,
            });
        };
        return _this;
    }
    SearchBar.prototype.render = function () {
        return (React.createElement("div", { className: style['g-topbar'] + " " + style['grid-x'] },
            React.createElement("div", { className: style.cell + " " + style['medium-10'] + " " + style['small-12'] },
                React.createElement("div", { className: style['cont-menu-tablet'] },
                    React.createElement("a", { className: style['btn-menu-tablet'] + " " + style.button + " " + style.primary + " " + style.clear, "aria-label": 'Open Navigation Bar', onClick: this.onOpenNavigationBar },
                        React.createElement("i", { className: style.icon + " " + style['i-menu-1'] }))),
                React.createElement("div", { className: style['cont-search'] },
                    React.createElement("input", { className: style['e-searchbar'], type: 'search', placeholder: 'Search in the app', onFocus: this.onSearchFocus, onBlur: this.onSearchBlur }),
                    React.createElement("button", { className: style['e-searchbtn'] + " " + style.button + " " + style.primary + " " + (this.state.showGoButton ? style.show : style.hide) },
                        React.createElement("span", null, "Go!")))),
            React.createElement("div", { className: style.cell + " " + style['medium-2'] + " " + style['small-12'] + " " + style['text-right'] })));
    };
    return SearchBar;
}(React.Component));
export { SearchBar };
//# sourceMappingURL=index.js.map