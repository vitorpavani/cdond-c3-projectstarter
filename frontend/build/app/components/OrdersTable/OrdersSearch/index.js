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
var OrdersSearch = (function (_super) {
    __extends(OrdersSearch, _super);
    function OrdersSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearchChange = _this.onSearchChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.searchInput = null;
        _this.state = {
            typingTimeout: 0,
            searchText: _this.props.searchText,
        };
        return _this;
    }
    OrdersSearch.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            this.setState({
                searchText: this.props.searchText,
            });
        }
        if (this.searchInput) {
            this.searchInput.focus();
        }
    };
    OrdersSearch.prototype.onSearchChange = function (event) {
        var _this = this;
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
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
    OrdersSearch.prototype.handleKeyDown = function (event) {
        var _a = this.state, searchText = _a.searchText, typingTimeout = _a.typingTimeout;
        if (event.key === 'Enter' && searchText) {
            if (typingTimeout)
                clearTimeout(typingTimeout);
            this.props.onSearchChange(searchText);
        }
    };
    OrdersSearch.prototype.render = function () {
        var _this = this;
        if (!shouldRender('OrdersSearch'))
            return null;
        return (React.createElement("div", { className: style.searchContainer },
            React.createElement("label", null,
                React.createElement("b", null, "Search:")),
            React.createElement("input", { disabled: this.props.isFetching, type: 'text', value: this.state.searchText, title: 'Search Orders', placeholder: this.props.placeholder, onChange: this.onSearchChange, onKeyDown: this.handleKeyDown, ref: function (input) {
                    _this.searchInput = input;
                } }),
            this.props.searchText ? (React.createElement("div", { className: style['clear-button'], onClick: function () { return _this.props.onSearchChange(''); } },
                React.createElement(FontAwesomeIcon, { icon: faTimes }))) : ('')));
    };
    return OrdersSearch;
}(Component));
export { OrdersSearch };
//# sourceMappingURL=index.js.map