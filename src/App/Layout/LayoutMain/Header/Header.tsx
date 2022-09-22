import { FC, ReactElement } from 'react';
import { Navbar } from '~/App/Layout/LayoutMain/Navbar/Navbar';

const Header: FC = (): ReactElement => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export { Header };
