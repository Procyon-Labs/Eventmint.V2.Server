import Image from "next/image";
import MenuLink from "./menuLInk/menuLink";
import styles from "./sidebar.module.css";
import { HiTicket } from "react-icons/hi2";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface MenuCategory {
  title: string;
  list: MenuItem[];
}

const menuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/dashboard/profile",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Create Event",
        path: "/dashboard/create-ticket/ticket-details",
        icon: <MdShoppingBag />,
      },
      {
        title: "Tickets",
        path: "/dashboard/tickets",
        icon: <HiTicket />,
      },
    ],
  },
  {
    title: "Premium",
    list: [
      {
        title: "Event Analytics",
        path: "/dashboard/event-analytics",
        icon: <MdWork />,
      },
      {
        title: "Smart Fundraising",
        path: "/dashboard/smart-fundraising",
        icon: <MdAnalytics />,
      },
      {
        title: "Budget Planning Protocol",
        path: "/dashboard/budget-protocol",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar: React.FC = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/Logo.png"}
          alt=""
          width="50"
          height="50"
        />
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
