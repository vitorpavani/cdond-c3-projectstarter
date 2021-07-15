import * as React from 'react';
import { shallow } from 'enzyme';
import { LoadingMessage } from 'app/components/LoadingMessage';
describe('<LoadingMessage>', function () {
    describe('Props', function () {
        describe('message', function () {
            it('Should render the props message', function () {
                var message = 'Hello!';
                var wrapper = shallow(React.createElement(LoadingMessage, { message: message }));
                expect(wrapper.contains(React.createElement("span", null, message))).toBeTruthy();
            });
        });
    });
});
//# sourceMappingURL=LoadingMessage.spec.js.map