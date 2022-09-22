import {FC, ReactElement} from 'react';
import {LayoutMain} from "~/App/Layout/LayoutMain/LayoutMain";

const Home:FC = (): ReactElement => {
  return (
    <LayoutMain>
      <h1>HOME PAGE</h1>
    </LayoutMain>
  )
}

export { Home }
