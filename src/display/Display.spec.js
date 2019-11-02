import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

describe('Controls />', () => {
    it('renders', () => {
        expect(render(<Display />)).not.toBeNull()
    })

    it('should match snapshot', () => {
        const disp = renderer.create(<Display />)

        expect(disp.toJSON()).toMatchSnapshot()
    })

    it('displays unlocked when unlocked', () => {
        const { getByText } = render(<Display locked={false}/>)
        const dispUnlock = getByText(/unlocked/i)

        expect(dispUnlock).toHaveTextContent(/unlocked/i)
        expect(dispUnlock).toHaveClass('green-led')
    })

    it('displays locked when locked', () => {
        const { getByText } = render(<Display locked={true} />)
        const dispLock = getByText(/locked/i)

        expect(dispLock).toHaveTextContent(/locked/i)
        expect(dispLock).toHaveClass('red-led')
    })
    
    it('displays open when open', () => {
        const { getByText } = render(<Display closed={false} />)
        const dispOpen = getByText(/open/i)

        expect(dispOpen).toHaveTextContent(/open/i)
        expect(dispOpen).toHaveClass('green-led')
    })
    
    it('displays closed when closed', () => {
        const { getByText } = render(<Display closed={true} />)
        const dispClose = getByText(/closed/i)

        expect(dispClose).toHaveTextContent(/closed/i)
        expect(dispClose).toHaveClass('red-led')
    })
})