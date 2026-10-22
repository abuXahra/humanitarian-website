type SliderDataType = {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  btnText: string;
};

export const SLIDES: SliderDataType[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1789758385775-98ab6db59e00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle: "Making a Difference",
    title: "A Better Future Is Near",
    description:
      "Together, we can create lasting change in the lives of vulnerable communities.",
    btnText: "Donate Now",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1789758385775-98ab6db59e00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle: "Education",
    title: "Empowering Through Education",
    description:
      "We support students and communities with access to education and opportunities.",
    btnText: "Learn More",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1789758385775-98ab6db59e00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle: "Healthcare",
    title: "Bringing Hope to Communities",
    description:
      "Providing healthcare and humanitarian support to people who need it most.",
    btnText: "Our Programs",
  },
];
