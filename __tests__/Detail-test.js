import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import Details from '../components/ScreenView/Details';
import { store } from '../components/Redux/Store';


const tree = create(
    <Provider store={store}>
        <Details />
    </Provider>)


test("Artist", () => {
    const text = tree.root.findByProps({ testID: 'mytext' }).props;
    expect(text.children).toEqual("ArtistName:");
})

test("Track", () => {
    const text = tree.root.findByProps({ testID: 'mytrack' }).props;
    expect(text.children).toEqual("TrackName:");
})

test("Collection", () => {
    const text = tree.root.findByProps({ testID: 'mycollection' }).props;
    expect(text.children).toEqual("CollectionName:");
})

test("Country", () => {
    const text = tree.root.findByProps({ testID: 'mycountry' }).props;
    expect(text.children).toEqual("Country:");
})

