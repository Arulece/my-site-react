import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(),
}));

describe('index.jsx entry point', () => {
  it('renders the App into the root element', () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    const renderMock = jest.fn();
    createRoot.mockReturnValue({ render: renderMock });

    // Require after mocks and DOM setup so index.jsx uses them
    // eslint-disable-next-line no-undef
    require('./index.jsx');

    expect(createRoot).toHaveBeenCalledWith(container);
    expect(renderMock).toHaveBeenCalledTimes(1);
  });
});
