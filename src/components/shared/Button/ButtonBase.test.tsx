import { render, screen } from '@testing-library/react';
import Button from './ButtonBase';

describe('Button Test', () => {
  // render Text
  const text = 'Hello, world!';

  test('render text', () => {
    render(<Button>{text}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent(text);
  });

  // disabled test
  test('disabled test', () => {
    render(<Button disabled>{text}</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  // full width test
  test('full width test', () => {
    render(<Button fullWidth>{text}</Button>);
    expect(window.getComputedStyle(screen.getByRole('button')).width).toBe(
      '100%'
    );
  });

  const options = [
    { size: 'sm', padding: '8px 10px' },
    { size: 'md', padding: '10px 12px' },
    { size: 'lg', padding: '14px 18px' },
    { size: 'xl', padding: '14px 18px' },
  ] as const;

  // button size test
  options.forEach((option) => {
    test(`size ${option.size} test`, () => {
      render(
        <Button fullWidth size={option.size}>
          {text}
        </Button>
      );
      expect(window.getComputedStyle(screen.getByRole('button')).padding).toBe(
        option.padding
      );
    });
  });
});
