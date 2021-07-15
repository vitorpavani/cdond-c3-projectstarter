var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import style from './style.local.css';
import { shallow } from 'enzyme';
import { Pagination } from '.';
import { Button } from 'app/components/Button';
jest.mock('./style.local.css', function () { return ({
    default: {},
}); });
style.Pagination__input = 'Pagination__input';
describe('<Pagination>', function () {
    var wrapper;
    var onPageChangeMock = jest.fn();
    var onPageSizeChangeMock = jest.fn();
    var props = {
        onPageChange: onPageChangeMock,
        onPageSizeChange: onPageSizeChangeMock,
        page: 1,
        pageSize: 100,
        total: 2700,
        loading: false,
    };
    beforeEach(function () {
        wrapper = shallow(React.createElement(Pagination, __assign({}, props)));
    });
    it('Should render', function () {
        expect(wrapper).toBeDefined();
    });
    describe('State', function () {
        describe('Should calculate correctly the pagination properties', function () {
            var currentPage = 1;
            var totalOrders = 55;
            var pageSize = 40;
            beforeEach(function () {
                wrapper = wrapper.setProps({
                    page: currentPage,
                    total: totalOrders,
                    pageSize: pageSize,
                });
            });
            it('Should calculate the number of pages', function () {
                var expectedNumberOfPages = Math.ceil(totalOrders / pageSize);
                expect(wrapper.state('pages')).toBe(expectedNumberOfPages);
            });
            it('Should calculate correcly the page first order index', function () {
                var expectedPageFirstOrderIndex = (currentPage - 1) * pageSize + 1;
                expect(wrapper.state('pageFirstOrderIndex')).toBe(expectedPageFirstOrderIndex);
            });
            describe('When current page is the last one', function () {
                beforeEach(function () {
                    currentPage = 2;
                    wrapper = wrapper.setProps({
                        page: currentPage,
                        total: totalOrders,
                        pageSize: pageSize,
                    });
                });
                it('Should calculate correcly the page last order index', function () {
                    var expectedPageLastOrderIndex = currentPage * pageSize;
                    if (expectedPageLastOrderIndex > totalOrders) {
                        expectedPageLastOrderIndex = totalOrders;
                    }
                    expect(wrapper.state('pageLastOrderIndex')).toBe(expectedPageLastOrderIndex);
                });
            });
        });
    });
    describe('Props', function () {
        describe('when receiving page prop', function () {
            beforeEach(function () {
                wrapper = wrapper.setProps({ page: 3 });
            });
            it('should update the page input value', function () {
                var inputValue = wrapper.find("." + style.Pagination__input).props()
                    .value;
                expect(inputValue).toBe('3');
            });
        });
        describe('when fetching data from the backend', function () {
            beforeEach(function () {
                wrapper = wrapper.setProps({ loading: true });
            });
            it('should disable the pagination buttons', function () {
                expect(wrapper
                    .find(Button)
                    .at(0)
                    .props().disabled).toEqual(true);
                expect(wrapper
                    .find(Button)
                    .at(1)
                    .props().disabled).toEqual(true);
            });
        });
    });
});
//# sourceMappingURL=Pagination.spec.js.map