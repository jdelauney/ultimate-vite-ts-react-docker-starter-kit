//import {describe, it, expect} from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';
import {BrowserRouter} from "react-router-dom";

describe('Given the App component', ()=> {
  describe("When app is rendered", ()=> {
    it('Should rendering "Home page" text ', () => {
      const { getByText } = render(<App/>,{wrapper: BrowserRouter});
      expect(getByText(/Home page/i)).toBeInTheDocument();
    })
  })
})
