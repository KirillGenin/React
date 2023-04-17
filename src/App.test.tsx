import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Pages from './types/types-test';

describe('App test', () => {
  it('should render home page logo', () => {
    render(
      <MemoryRouter initialEntries={[Pages.HomePage]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('logo')).toHaveTextContent(/home/i);
  });

  it('should render about page logo', () => {
    render(
      <MemoryRouter initialEntries={[Pages.AboutPage]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('logo')).toHaveTextContent(/about/i);
  });

  it('should render about page logo', () => {
    render(
      <MemoryRouter initialEntries={[Pages.FormPage]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('logo')).toHaveTextContent(/form/i);
  });

  it('should render about page logo', () => {
    render(
      <MemoryRouter initialEntries={[Pages.PageNotFound]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('logo')).toHaveTextContent(/404 Error/i);
  });
});
