import { FC, ReactElement, ReactNode } from 'react';

import { Header } from '~/App/Layout/LayoutMain/Header/Header';
import { Footer } from '~/App/Layout/LayoutMain/Footer/Footer';

interface Props {
  children: ReactNode;
}

const LayoutMain: FC<Props> = (props: Props): ReactElement => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export { LayoutMain };
