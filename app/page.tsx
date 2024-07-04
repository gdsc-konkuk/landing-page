import Footer from './_component/Footer';
import Header from './_component/Header';
import Main from './_component/main/Main';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
