import Footer from './_component/Footer';
import Header from './_component/Header';
import Main from './_component/main/Main';
import SolutionChallenge from './_component/solution-challenge/SolutionChallenge';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <SolutionChallenge />
      <Footer />
    </div>
  );
}
