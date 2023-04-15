import React from 'react'
import Main from '../components/ScreenView/Main'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { store } from '../components/Redux/Store'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const navigation = {
    navigate: jest.fn()
}

test('render check', () => {

    const tree = shallow(
        <Provider store={store}>
            <Main navigation={navigation} />
        </Provider>
    )

})