import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
    test('Rendering the simple component', () => {
        const wrapper = shallow(
            <Header />
        );

        except(wrappper),toMatchSnapshot();
    });
});