import React from "react";
import { render } from '@testing-library/react-native'
import { create } from "react-test-renderer";
import {View, ActivityIndicator} from 'react-native'

it('if accessbility label matches it should return true',() => {
    const { getByAccessibilityHint} = render(
        <View>
            <ActivityIndicator accessibilityHint = 'loading'/>
        </View>
    )
    getByAccessibilityHint("loading")
})