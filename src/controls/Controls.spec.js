import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'

describe('Controls />', () => {
    it('renders', () => {
        expect(render(<Controls />)).not.toBeNull()
    })

    it('should match snapshot', () => {
        const control = renderer.create(<Controls />)

        expect(control.toJSON()).toMatchSnapshot()
    })

    it('unlocked and open = lock gate disabled and close gate clickable', () => {
        const { getByText } = render(<Controls locked={false} closed={false}/>)
        const closeBtn = getByText(/close gate/i)
        const lockBtn = getByText(/lock gate/i)

        expect(closeBtn).toHaveTextContent(/close gate/i)
        expect(closeBtn).not.toBeDisabled()
        expect(lockBtn).toHaveTextContent(/lock gate/i)
        expect(lockBtn).toBeDisabled()
    })

    it('unlocked and closed = lock gate and open gate clickable', () => {
        const { getByText } = render(<Controls locked={false} closed={true}/>)
        const openBtn = getByText(/open gate/i)
        const lockBtn = getByText(/lock gate/i)

        expect(openBtn).toHaveTextContent(/open gate/i)
        expect(openBtn).not.toBeDisabled()
        expect(lockBtn).toHaveTextContent(/lock gate/i)
        expect(lockBtn).not.toBeDisabled()
    })

    it('locked and closed = unlock gate clickable and close gate disabled', () => {
        const { getByText } = render(<Controls locked={true} closed={true}/>)
        const openBtn = getByText(/open gate/i)
        const unlockBtn = getByText(/unlock gate/i)

        expect(openBtn).toHaveTextContent(/open gate/i)
        expect(openBtn).toBeDisabled()
        expect(unlockBtn).toHaveTextContent(/unlock gate/i)
        expect(unlockBtn).not.toBeDisabled()
    })
})