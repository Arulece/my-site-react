import { useState } from 'react';
import './ContactPage.scss';

const required = (value, message) => {
  if (!value.trim()) {
    return message;
  }
  return '';
};

const minLength = (value, length, message) => {
  if (value.trim().length < length) {
    return message;
  }
  return '';
};

const isEmail = (value, message) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) {
    return message;
  }
  return '';
};

const isOptionalPhone = (value, message) => {
  if (!value.trim()) {
    return '';
  }
  if (!/^\+?[0-9\s\-()]{7,15}$/.test(value.trim())) {
    return message;
  }
  return '';
};

const validateContactField = (name, value) => {
  switch (name) {
    case 'fullName': {
      return (
        required(value, 'Full name is required.') ||
        minLength(value, 3, 'Full name must be at least 3 characters.')
      );
    }
    case 'email': {
      return (
        required(value, 'Email is required.') ||
        isEmail(value, 'Please enter a valid email address.')
      );
    }
    case 'phone':
      return isOptionalPhone(value, 'Phone number must contain only numbers and basic symbols.');
    case 'message': {
      return (
        required(value, 'Message is required.') ||
        minLength(value, 10, 'Message must be at least 10 characters.')
      );
    }
    default:
      return '';
  }
};

const validateContactValues = (currentValues) => {
  const nextErrors = {};
  Object.keys(currentValues).forEach((fieldName) => {
    const errorMessage = validateContactField(fieldName, currentValues[fieldName]);
    if (errorMessage) {
      nextErrors[fieldName] = errorMessage;
    }
  });
  return nextErrors;
};

const ContactPage = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMessage = validateContactField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: errorMessage || undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateContactValues(values);
    setErrors(validationErrors);
    setTouched(
      Object.keys(values).reduce(
        (accumulator, fieldName) => ({ ...accumulator, [fieldName]: true }),
        {}
      )
    );

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus('');
      return;
    }

    // At this point the form is valid. You can send the data to an API here.
    // For now, just simulate success and reset the form.
    setValues({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmitStatus('Thank you! Your message has been sent successfully.');
  };

  const hasError = (fieldName) => Boolean(touched[fieldName] && errors[fieldName]);
  const isFormValid =
    Object.keys(validateContactValues(values)).length === 0 &&
    values.fullName &&
    values.email &&
    values.message;

  return (
    <section className="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <h1 className="contact__title">Connect With Us</h1>
          <p className="contact__subtitle">
            We would love to respond to your queries and help you succeed. Feel free to get in touch
            with us.
          </p>
        </header>

        <div className="contact__body">
          <div className="contact__form-card">
            <h2 className="contact__form-title">Send your request</h2>

            {submitStatus && (
              <p className="contact__success" role="status" aria-live="polite">
                {submitStatus}
              </p>
            )}

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row contact__row--split">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="fullName">
                    Name
                  </label>
                  <input
                    className={`contact__input${hasError('fullName') ? ' contact__input--error' : ''}`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Amendo"
                    aria-required="true"
                    aria-invalid={hasError('fullName')}
                    aria-describedby={hasError('fullName') ? 'fullName-error' : undefined}
                  />
                  {hasError('fullName') && (
                    <p id="fullName-error" className="contact__error-text">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className={`contact__input${hasError('phone') ? ' contact__input--error' : ''}`}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+1 412 520 3231"
                    aria-invalid={hasError('phone')}
                    aria-describedby={hasError('phone') ? 'phone-error' : undefined}
                  />
                  {hasError('phone') && (
                    <p id="phone-error" className="contact__error-text">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact__row contact__row--split">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`contact__input${hasError('email') ? ' contact__input--error' : ''}`}
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="johnamendogm@gmail.com"
                    required
                    aria-required="true"
                    aria-invalid={hasError('email')}
                    aria-describedby={hasError('email') ? 'email-error' : undefined}
                  />
                  {hasError('email') && (
                    <p id="email-error" className="contact__error-text">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="contact__input"
                    type="text"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Product Demo"
                  />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={`contact__textarea${hasError('message') ? ' contact__textarea--error' : ''}`}
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows="5"
                    aria-required="true"
                    aria-invalid={hasError('message')}
                    aria-describedby={hasError('message') ? 'message-error' : undefined}
                  />
                  {hasError('message') && (
                    <p id="message-error" className="contact__error-text">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact__actions">
                <button className="contact__button" type="submit" disabled={!isFormValid}>
                  Send
                </button>
              </div>
            </form>
          </div>

          <aside className="contact__info-card">
            <h2 className="contact__info-title">Reach Us</h2>

            <dl className="contact__info-list">
              <div className="contact__info-item">
                <dt className="contact__info-label">Email</dt>
                <dd className="contact__info-value">arulkumar.m.ece@gmail.com</dd>
              </div>

              <div className="contact__info-item">
                <dt className="contact__info-label">Phone</dt>
                <dd className="contact__info-value">+91 9677390366</dd>
              </div>

              <div className="contact__info-item">
                <dt className="contact__info-label">Address</dt>
                <dd className="contact__info-value">
                  Flat No. 2B, Aandavar Nagar
                  <br />
                  Belur(po), Valapady(tk),
                  <br />
                  Salem 636104
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
