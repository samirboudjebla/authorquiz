import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import AuthorQuiz from './AuthorQuiz';




describe("Author Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AuthorQuiz />, div);
        });

        });


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
