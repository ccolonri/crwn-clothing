import React from 'react'

import {CustomButtonContainer} from './custom-button.styles'

//Another example of css in JS

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)


export default CustomButton;