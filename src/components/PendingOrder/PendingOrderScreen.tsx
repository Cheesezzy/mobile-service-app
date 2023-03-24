import React from 'react'
import { ScrollView } from 'react-native'
import PendingOrderComponent from './PendingOrderComponent'
import useTheme from '../../hooks/useTheme'
import HeaderFAQs from '../../screens/ContactSupport/compponents/HeaderFAQs'

// :q what does SOLID stands for? 


const PendingOrderScreen = () => {
    const { backgroundColor, color, theme } = useTheme();

    return (
        <>
            <HeaderFAQs title='Pending order' />
            <ScrollView style={[{ flex: 1, backgroundColor }]}>

                {Array(4).fill(null).map((item, index) => (<PendingOrderComponent
                    key={index}
                />))}

            </ScrollView>
        </>
    )
}

export default PendingOrderScreen
