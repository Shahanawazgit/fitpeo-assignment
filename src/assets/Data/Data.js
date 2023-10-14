// Sidebar imports
import { TbDashboard } from 'react-icons/tb';
import { AiFillCodeSandboxSquare, AiOutlineDollarCircle } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { PiUserSquareBold } from 'react-icons/pi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { LuBadgePercent, LuClipboardList } from 'react-icons/lu';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';

// Sidebar Data
export const SidebarData = [
  {
    icon: TbDashboard,
    heading: 'Dashboard',
  },
  {
    icon: AiFillCodeSandboxSquare,
    heading: 'Product',
  },
  {
    icon: PiUserSquareBold,
    heading: 'Customers',
  },
  {
    icon: RiMoneyDollarBoxLine,
    heading: 'Income',
  },
  {
    icon: LuBadgePercent,
    heading: 'Promote',
  },
  {
    icon: MdOutlineLiveHelp,
    heading: 'Help',
  },
];

// Cards Data
export const CardsData = [
  {
    png: AiOutlineDollarCircle,
    title: 'Earning',
    value: 198,
    growth: 37.8,
    growthText: 'this month',
    background: '#bbe9d2',
    color: '#07a907',
  },
  {
    png: LuClipboardList,
    title: 'Orders',
    value: 2.4,
    growth: 2,
    growthText: 'this month',
    background: '#efc6ef',
    color: '#860bb9',
  },
  {
    png: GiWallet,
    title: 'Balance',
    value: 2.4,
    growth: 2,
    growthText: 'this month',
    background: '#c0c0eb',
    color: '#4545df',
  },
  {
    png: BiShoppingBag,
    title: 'Total Sales',
    value: 89,
    growth: 11,
    growthText: 'this week',
    background: '#f195a5',
    color: '#c40606',
  },
];
