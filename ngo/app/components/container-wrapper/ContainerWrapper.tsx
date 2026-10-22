// export default function Wrapper({ chidlren }: { chidlren: React.ReactNode }) {
//   return <div className="w-full px-4 md:px-16">{chidlren}</div>;
// }

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-full px-8">{children}</div>;
}
