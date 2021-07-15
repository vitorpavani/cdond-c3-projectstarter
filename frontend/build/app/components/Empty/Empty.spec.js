import * as React from 'react';
import { shallow } from 'enzyme';
import { Empty } from '.';
describe('<Empty />', function () {
    describe('When rendering the component', function () {
        it('Should render correctly', function () {
            var wrapper = shallow(React.createElement(Empty, { title: 'No orders at the moment' }));
            expect(wrapper).toBeDefined();
        });
    });
});
//# sourceMappingURL=Empty.spec.js.map