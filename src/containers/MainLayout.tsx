import Header from "../components/Header";

type Props = {
  children: React.ReactElement
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen space-y-4 bg-white displays">
      <Header />
      <main className="h-screen px-8">
        {children}
      </main>

    </div>
  )
}