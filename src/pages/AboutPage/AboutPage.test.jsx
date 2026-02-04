import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders the About page heading', () => {
    render(<AboutPage />);
    const heading = screen.getByRole('heading', { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the professional summary section', () => {
    render(<AboutPage />);
    const summaryHeading = screen.getByRole('heading', { name: /professional summary/i });
    expect(summaryHeading).toBeInTheDocument();
  });

  it('renders the experience section', () => {
    render(<AboutPage />);
    const experienceHeading = screen.getByRole('heading', { name: /experience/i, level: 2 });
    expect(experienceHeading).toBeInTheDocument();
  });

  it('renders the education section', () => {
    render(<AboutPage />);
    const educationHeading = screen.getByRole('heading', { name: /education/i });
    expect(educationHeading).toBeInTheDocument();
  });

  it('renders Adobe role in experience', () => {
    render(<AboutPage />);
    const adobeRole = screen.getByText(/technical consultant/i);
    expect(adobeRole).toBeInTheDocument();
  });

  it('renders education institution', () => {
    render(<AboutPage />);
    const institution = screen.getByText(/salem college of engineering and technology/i);
    expect(institution).toBeInTheDocument();
  });

  it('renders key skills section', () => {
    render(<AboutPage />);
    const skillsHeading = screen.getByRole('heading', { name: /key skills/i });
    expect(skillsHeading).toBeInTheDocument();
  });

  it('displays React skill', () => {
    render(<AboutPage />);
    const reactSkills = screen.getAllByText('React');
    expect(reactSkills.length).toBeGreaterThan(0);
  });
});
