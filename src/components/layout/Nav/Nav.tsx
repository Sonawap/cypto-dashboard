import { WALLET_PREFIX_PATH } from "@/config";

type NavItemType = {
  label: string;
  link: string;
};

export const Nav: React.FC = () => {
  
  return (
    <div className="flex gap-5 justify-between self-stretch my-auto">
      {sidebarItems?.map((item: NavItemType) => (
        <NavItem {...item} key={item.label} />
      ))}
    </div>
  );
};

const NavItem: React.FC<NavItemType> = ({ label, link  }) => {
  return (
    <a href={link}>{label}</a>
  )
}

const sidebarItems: NavItemType[] = [
  {
    label: 'Exchange',
    link: "/",
  },
  {
    label: 'Wallet',
    link: WALLET_PREFIX_PATH,
  },
  {
    label: 'Roqqu Hub',
    link: "#",
  },
];
