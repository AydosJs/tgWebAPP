import Header from "../components/Header";

type Props = {
  children: React.ReactElement
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen p-2 space-y-4 displays">
      <Header />
      {children}

    </div>
  )
}