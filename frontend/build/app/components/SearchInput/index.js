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
import { Component } from 'react';
import style from './style.local.css';
import { shouldRender } from 'app/utils/FeatureToggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
var SearchInput = (function (_super) {
    __extends(SearchInput, _super);
    function SearchInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearchChange = function (event) {
            if (_this.state.typingTimeout) {
                clearTimeout(_this.state.typingTimeout);
            }
            _this.setState({
                searchText: event.target.value,
                typingTimeout: setTimeout(function () {
                    var searchText = _this.state.searchText;
                    var shouldResetSearch = searchText.length === 0 &&
                        _this.state.searchText !== _this.props.searchText;
                    if (searchText.length >= 3 || shouldResetSearch) {
                        _this.props.onSearchChange(searchText);
                    }
                }, 500),
            });
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.state, searchText = _a.searchText, typingTimeout = _a.typingTimeout;
            if (event.key === 'Enter' && searchText) {
                if (typingTimeout)
                    clearTimeout(typingTimeout);
                _this.props.onSearchChange(searchText);
            }
        };
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.searchInput = null;
        _this.state = {
            typingTimeout: 0,
            searchText: _this.props.searchText,
        };
        return _this;
    }
    SearchInput.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            this.setState({
                searchText: this.props.searchText,
            });
        }
        if (this.searchInput) {
            this.searchInput.focus();
        }
    };
    SearchInput.prototype.render = function () {
        var _this = this;
        if (!shouldRender('SearchInput'))
            return null;
        return (React.createElement("div", { className: style.searchContainer },
            React.createElement("label", null,
                React.createElement("b", null, "Search:")),
            React.createElement("input", { disabled: this.props.isFetching, type: 'text', value: this.state.searchText, title: this.props.title, placeholder: this.props.placeholder, onChange: this.onSearchChange, onKeyDown: this.handleKeyDown, ref: function (input) {
                    _this.searchInput = input;
                } }),
            this.props.searchText ? (React.createElement("div", { className: style['clear-button'], onClick: function () { return _this.props.onSearchChange(''); } },
                React.createElement(FontAwesomeIcon, { icon: faTimes }))) : ('')));
    };
    return SearchInput;
}(Component));
export { SearchInput };
//# sourceMappingURL=index.js.map