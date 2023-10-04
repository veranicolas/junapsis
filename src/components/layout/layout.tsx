import { ReactNode } from "react";
import styles from './layout.module.css'

type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
};
  
export default Layout;