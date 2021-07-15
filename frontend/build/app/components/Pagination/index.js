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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './style.local.css';
import { Button } from 'app/components/Button';
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pages: _this.getNumberOfPages(props),
            pageFirstOrderIndex: _this.getPageFirstOrderIndex(props),
            pageLastOrderIndex: _this.getPageLastOrderIndex(props),
            currentPage: String(_this.props.page),
        };
        return _this;
    }
    Pagination.prototype.getNumberOfPages = function (props) {
        return Math.ceil(props.total / props.pageSize);
    };
    Pagination.prototype.getPageFirstOrderIndex = function (props) {
        return (props.page - 1) * props.pageSize + 1;
    };
    Pagination.prototype.getPageLastOrderIndex = function (props) {
        var pageLastOrderIndex = props.page * props.pageSize;
        if (pageLastOrderIndex > props.total) {
            return props.total;
        }
        return pageLastOrderIndex;
    };
    Pagination.prototype.componentWillReceiveProps = function (nextProps) {
        var newState = {};
        var pageSizeDidChanged = this.pageSizeDidChanged(nextProps.pageSize);
        var totalDidChanged = this.totalDidChanged(nextProps.total);
        var pageDidChanged = this.pageDidChanged(nextProps.page);
        if (pageSizeDidChanged || totalDidChanged || pageDidChanged) {
            newState.pages = this.getNumberOfPages(nextProps);
            newState.pageFirstOrderIndex = this.getPageFirstOrderIndex(nextProps);
            newState.pageLastOrderIndex = this.getPageLastOrderIndex(nextProps);
            newState.currentPage = String(nextProps.page);
        }
        this.setState(newState);
    };
    Pagination.prototype.pageDidChanged = function (newPage) {
        return this.props.page !== newPage;
    };
    Pagination.prototype.pageSizeDidChanged = function (newPageSize) {
        return this.props.pageSize !== newPageSize;
    };
    Pagination.prototype.totalDidChanged = function (newTotal) {
        return this.props.total !== newTotal;
    };
    Pagination.prototype.handleOnKeyDown = function (event) {
        var key = event.key;
        var currentPage = this.state.currentPage;
        var _a = this.props, page = _a.page, onPageChange = _a.onPageChange;
        if (key === 'Escape')
            this.restorePageInputFromProps();
        if (!currentPage || page === parseInt(currentPage, 10))
            return;
        var newPage = parseInt(this.state.currentPage || '1', 10);
        var numberOfPages = Math.ceil(this.props.total / this.props.pageSize);
        if (newPage <= 0) {
            this.setState({ currentPage: '1' });
            return;
        }
        if (newPage > numberOfPages) {
            this.setState({ currentPage: String(numberOfPages) });
            return;
        }
        if (key === 'Enter')
            onPageChange(parseInt(currentPage, 10) || 1);
    };
    Pagination.prototype.handleOnChange = function (event) {
        var isAValidNumber = /^[0-9]+$/.test(event.target.value);
        if (isAValidNumber || event.target.value === '') {
            this.setState({ currentPage: event.target.value });
        }
    };
    Pagination.prototype.goToPreviousPage = function () {
        this.props.onPageChange(this.props.page - 1);
    };
    Pagination.prototype.goToNextPage = function () {
        this.props.onPageChange(this.props.page + 1);
    };
    Pagination.prototype.renderPreviousButton = function () {
        return (React.createElement(Button, { disabled: this.props.page === 1 || this.props.loading, className: style.Pagination__button, onClick: this.goToPreviousPage.bind(this), title: 'Previous Page' },
            React.createElement(FontAwesomeIcon, { icon: faArrowLeft }),
            "Previous"));
    };
    Pagination.prototype.renderNextButton = function () {
        return (React.createElement(Button, { disabled: this.props.page === this.state.pages || this.props.loading, className: style.Pagination__button, onClick: this.goToNextPage.bind(this), title: 'Next Page' },
            "Next",
            React.createElement(FontAwesomeIcon, { icon: faArrowRight })));
    };
    Pagination.prototype.restorePageInputFromProps = function () {
        this.setState({ currentPage: String(this.props.page) });
    };
    Pagination.prototype.render = function () {
        return (React.createElement("div", { className: style.Pagination__container },
            React.createElement("span", null,
                this.state.pageFirstOrderIndex,
                " - ",
                this.state.pageLastOrderIndex,
                " of",
                ' ',
                this.props.total,
                " orders"),
            React.createElement("div", { className: style['Pagination__buttons-container'] },
                this.renderPreviousButton(),
                React.createElement("label", null, "Page"),
                React.createElement("input", { className: style.Pagination__input, type: 'text', value: this.state.currentPage, onKeyDown: this.handleOnKeyDown.bind(this), onChange: this.handleOnChange.bind(this), onBlur: this.restorePageInputFromProps.bind(this), disabled: this.props.loading }),
                React.createElement("label", null,
                    "of ",
                    this.state.pages),
                this.renderNextButton())));
    };
    return Pagination;
}(Component));
export { Pagination };
//# sourceMappingURL=index.js.map