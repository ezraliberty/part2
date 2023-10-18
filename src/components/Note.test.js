import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Testing React',
    important: true
  }

  const mockHandler = jest.fn()

  render(<Note note={note} toggleImportance={mockHandler} />)

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)
  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('renders content', () => {
  const note = {
    content: 'Testing Jest in React',
    important: true
  }
  render(<Note note={note} />)
//   screen.debug()
//   const div = container.querySelector('.note')
//   expect(div).toHaveTextContent('Testing Jest in React')
//   render(<Note note={note} />)
//   const element = screen.getByText('Testing Jest in React')
//   expect(element).toBeDefined()
})