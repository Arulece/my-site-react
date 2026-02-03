import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder/TextDecoder for libraries like react-router-dom in Jest
// eslint-disable-next-line no-undef
if (!global.TextEncoder) {
  // eslint-disable-next-line no-undef
  global.TextEncoder = TextEncoder;
}

// eslint-disable-next-line no-undef
if (!global.TextDecoder) {
  // eslint-disable-next-line no-undef
  global.TextDecoder = TextDecoder;
}
