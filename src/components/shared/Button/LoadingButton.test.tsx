import { render, screen } from '@testing-library/react';
import Button from './LoadingButton';

describe('test Loading Button', () => {
  const text = 'Hello, World!';

  test('render test', () => {
    render(<Button>{text}</Button>);

    expect(screen.getByRole('button')).toHaveTextContent(text);
  });

  test('load spinner if fetch something', () => {
    render(<Button isLoading>{text}</Button>);

    // visibility hidden can't be tested
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
