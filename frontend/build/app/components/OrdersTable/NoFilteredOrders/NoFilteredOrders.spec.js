import { shallow } from 'enzyme';
import { NoFilteredOrders } from '.';
import * as React from 'react';
import { Button } from 'app/components/Button';
var mockHandleResetOrders = jest.fn();
describe('<NoFilteredOrders>', function () {
    var wrapper;
    beforeEach(function () {
        wrapper = shallow(React.createElement(NoFilteredOrders, { searchText: '', handleResetOrders: mockHandleResetOrders }));
    });
    describe('when reset button is clicked', function () {
        it('should called handleResetOrders with empty string', function () {
            wrapper.find(Button).simulate('click');
            expect(mockHandleResetOrders).toBeCalledWith('');
        });
    });
});
//# sourceMappingURL=NoFilteredOrders.spec.js.map