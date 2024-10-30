import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container max-w-[1400px] mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
