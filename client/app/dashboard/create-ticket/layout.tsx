// pages/main/index.js
import Link from 'next/link';
import styles from './ticket.module.css'

interface LayoutProps {
    children: React.ReactNode;
  }
  

  const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className={styles.container}>
      <nav className='border border-red-500'>
        <ul>
          <li>
            <Link className='text-white' href="/dashboard/create-ticket/ticket-details">Ticket Details</Link>
          </li>
          <li>
            <Link className='text-white'  href="/dashboard/create-ticket/ticket-preview">Ticket Preview</Link>
          </li>
        </ul>
      </nav>
      <div >
        {children}
      </div>
      <div>
        footer
      </div>
    </div>
  );
};

export default Layout;
