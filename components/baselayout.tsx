import { ReactNode } from 'react';
import Header from './header';

type Props = {
  children: ReactNode
};

const BaseLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
)

export default BaseLayout;