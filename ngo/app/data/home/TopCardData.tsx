import { GiCoffeeCup } from "react-icons/gi";

type TopCardDataType = {
  icon: React.ReactNode;
  title: string;
  body: string;
  slug: string;
  btnText: string;
};
export const TopCardData: TopCardDataType[] = [
  {
    icon: <GiCoffeeCup className="size-15" />,
    title: "Education Relief",
    body: "Education Relief Empowering orphans and the disadvantaged through education and academic support.",
    slug: "/edcation relief",
    btnText: "Learn more",
  },

  {
    icon: <GiCoffeeCup className="size-15" />,
    title: "Hunger Relief",
    body: "We seek to eradicate hunger and malnutrition by providing immediate aid and long-term sustainable solutions.",
    slug: "/hunger relief",
    btnText: "Learn more",
  },

  {
    icon: <GiCoffeeCup className="size-15" />,
    title: "Water Relief",
    body: "We work towards a future where everyone has access to the life-giving resource of water, without exception.",
    slug: "/water relief",
    btnText: "Learn more",
  },

  {
    icon: <GiCoffeeCup className="size-15" />,
    title: "Health Relief",
    body: "We bridge the gap, bringing essential medical care to those in dire need. We believe that healthcare is a right, not a privilege.",
    slug: "/health relief",
    btnText: "Learn more",
  },
];
