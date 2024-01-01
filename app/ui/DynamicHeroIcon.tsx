import * as HeroIcons from "@heroicons/react/24/outline";

type IconName = keyof typeof HeroIcons;
interface IconProps {
  icon: IconName;
  classList?: string
  width?: number
}

export const DynamicHeroIcon = ({ icon, classList, width = 20 }: IconProps) => {

  let Icon

  if (!Object.keys(HeroIcons).includes(icon)) {
    Icon = HeroIcons['ExclamationCircleIcon'];
  } else {
    Icon = HeroIcons[icon];
  }

  return (
    <Icon width={width} className={classList} />
  );
};