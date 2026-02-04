import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from './ContactPage';

const setup = () => {
  const user = userEvent.setup();
  render(<ContactPage />);
  const nameInput = screen.getByLabelText(/Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const phoneInput = screen.getByLabelText(/Phone/i);
  const messageInput = screen.getByLabelText(/Message/i);
  const submitButton = screen.getByRole('button', { name: /Send/i });

  return { user, nameInput, emailInput, phoneInput, messageInput, submitButton };
};

describe('ContactPage validation', () => {
  it('disables submit button when form is initially invalid', () => {
    const { submitButton } = setup();
    expect(submitButton).toBeDisabled();
  });

  it('shows validation errors on blur for required fields', async () => {
    const { user, nameInput, emailInput, messageInput } = setup();

    await user.click(nameInput);
    await user.tab();
    await user.click(emailInput);
    await user.tab();
    await user.click(messageInput);
    await user.tab();

    expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });

  it('shows error for invalid email and short message on submit', async () => {
    const { user, nameInput, emailInput, messageInput, submitButton } = setup();

    await user.type(nameInput, 'Jo');
    await user.type(emailInput, 'invalid-email');
    await user.type(messageInput, 'short');
    await user.click(submitButton);

    expect(screen.getByText(/Full name must be at least 3 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Message must be at least 10 characters/i)).toBeInTheDocument();
  });

  it('validates phone number when provided', async () => {
    const { user, phoneInput, submitButton, nameInput, emailInput, messageInput } = setup();

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a valid message.');
    await user.type(phoneInput, 'abc123');
    await user.click(submitButton);

    expect(
      screen.getByText(/Phone number must contain only numbers and basic symbols/i)
    ).toBeInTheDocument();
  });

  it('enables submit button when form is valid', async () => {
    const { user, nameInput, emailInput, messageInput, submitButton } = setup();

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a valid message.');

    expect(submitButton).not.toBeDisabled();
  });

  it('submits successfully when form is valid and resets the form', async () => {
    const { user, nameInput, emailInput, phoneInput, messageInput, submitButton } = setup();

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(phoneInput, '+1 555 123 4567');
    await user.type(messageInput, 'This is a valid contact message.');

    await user.click(submitButton);

    // Success message from submitStatus branch
    expect(
      screen.getByText(/Thank you! Your message has been sent successfully./i)
    ).toBeInTheDocument();

    // Fields should be reset
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});
