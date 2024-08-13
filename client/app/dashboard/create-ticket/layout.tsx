'use client';
import Link from 'next/link';
import styles from './ticket.module.css';
import { Typography } from '@/component/typogrphy';
import { Button } from '@/component/button';
import ArrowLeft from '@/component/svgs/arrowLeft';
import ArrowRight from '@/component/svgs/arrowRight';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <ul className={styles.navContext}>
          <li className={isActive('/dashboard/create-ticket/ticket-details') && styles.list}>
            <Link href="/dashboard/create-ticket/ticket-details">
              <Typography
                variant="body-m"
                customClassName={clsx('font-Ubuntu', {
                  'text-[#323A46]': !isActive('/dashboard/create-ticket/ticket-details'),
                  'text-[#D0D5DD]': isActive('/dashboard/create-ticket/ticket-details'), // Active style
                })}
              >
                Ticket Details
              </Typography>
            </Link>
          </li>
          <li className={isActive('/dashboard/create-ticket/ticket-preview') && styles.list}>
            <Link href="/dashboard/create-ticket/ticket-preview">
              <Typography
                variant="body-m"
                customClassName={clsx('font-Ubuntu', {
                  'text-[#323A46]': !isActive('/dashboard/create-ticket/ticket-preview'),
                  'text-[#D0D5DD]': isActive('/dashboard/create-ticket/ticket-preview'), // Active style
                })}
              >
                Ticket Preview
              </Typography>
            </Link>
          </li>
        </ul>
        <div>
          <div className="flex items-center justify-center px-[16px] py-[7px] rounded-[12px] bg-[#3EFF3E]">
            <Typography>1</Typography>
          </div>
        </div>
      </nav>
      <div >{children}</div>
      <div>
        <div className="flex items-end justify-end px-[24px] pt-[24px] pb-[32px] gap-[32px]">
          <Button
            leftIcon={<ArrowLeft />}
            label={'Back'}
            fit
            customClassName="font-open-sas text-body-s text-[#323A46]"
            size="none"
          />
          <Button
            rightIcon={<ArrowRight />}
            label={'Next'}
            fit
            customClassName="font-open-sas text-body-s text-fontgreenishColor"
            size="none"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
