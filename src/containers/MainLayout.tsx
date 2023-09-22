import Header from "../components/Header";

type Props = {
  children: React.ReactElement
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen space-y-4 bg-white displays">
      <Header />
      <main className="min-h-screen p-6">
        {children}
      </main>

    </div>
  )
}