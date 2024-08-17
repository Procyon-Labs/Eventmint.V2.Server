'use client';
import Link from 'next/link';
import styles from './ticket.module.css';
import { Typography } from '@/component/typogrphy';
import { Button } from '@/component/button';
import ArrowLeft from '@/component/svgs/arrowLeft';
import ArrowRight from '@/component/svgs/arrowRight';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  const pathname = usePathname();
  
  const router = useRouter();

   const isActive = (path: string) => pathname === path;
  const isTicketDetailsPage =()=>{
    return isActive('/dashboard/create-ticket/ticket-details')
  }
  const redirectToPreviewPage = () => {
    router.push('/dashboard/create-ticket/ticket-preview');
  };

  const redirectToDetailPage = () => {
    router.push('/dashboard/create-ticket/ticket-details');
  };

  const GetTicketPage = isTicketDetailsPage();

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
                  'text-[#D0D5DD]': isActive('/dashboard/create-ticket/ticket-details'), 
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
          {GetTicketPage ? (
          
          <div className="flex items-center justify-center px-[16px] py-[7px] rounded-[12px] bg-[#3EFF3E]">
            <Typography>1</Typography>
          </div>
          ):(
            <div className="flex items-center justify-center px-[16px] py-[7px] rounded-[12px] bg-[#3EFF3E]">
            <Typography>2</Typography>
          </div>
          )}
        </div>
      </nav>
      <div >{children}</div>
      <div>
        <div className="flex items-end justify-end px-[24px] pt-[24px] pb-[32px] gap-[16px]">
          <Button
            leftIcon={<ArrowLeft />}
            label={'Back'}
            fit
            customClassName="font-open-sas text-body-s text-[#323A46]"
            size="smaller"
            onClick={redirectToDetailPage}
          />
          {
            GetTicketPage ? (
              <Button
              rightIcon={<ArrowRight />}
              label={'Next'}
              fit
              customClassName="font-open-sas text-body-s text-fontgreenishColor"
              size="smaller"
              onClick={redirectToPreviewPage}
            />

            ):(

              <Button
              label={'submit'}
              customClassName="text-eventMint font-open-sans bg-gradient-to-b-custom rounded-[12px] text-center"
              size="smaller"
              fit
            />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Layout;
