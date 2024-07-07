import Footer from './_component/Footer';
import Header from './_component/Header';
import Main from './_component/main/Main';
import Review from './_component/review/Review';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Review />
      <Footer />
    </div>
  );
}
