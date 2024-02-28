// A Component for managing the layout of the whole design
// Easy way to modify/change the layout width and other common style's

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1024px] m-auto">{children}</div>;
}

export default Layout;
