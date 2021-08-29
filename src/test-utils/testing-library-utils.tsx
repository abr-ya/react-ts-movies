/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import ReduxProvider from '../redux/ReduxProvider';

const renderWithContext = (ui: any, options: any) => render(ui, { wrapper: ReduxProvider, ...options });

export * from '@testing-library/react'; // всё как есть
export { renderWithContext as render }; // переопределяем
