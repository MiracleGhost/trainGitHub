import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import '@testing-library/jest-dom/extend-expect'

test('Click on Map Link in Nav and get the Content', async () => {
  render(<App />);
  await userEvent.click(screen.getByText('Karte'))
  expect(screen.getByRole('heading')).toHaveTextContent('Mit der Karte kannst du nach nach einer Station suchen. Klicke auf einen Bahnhof.')
});

