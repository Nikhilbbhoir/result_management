import Header from "./components/Header";

export default function PublicLayout({children}){
    return <section>
        <Header />
        {children}
        </section>
}