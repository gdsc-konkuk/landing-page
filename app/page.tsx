import Footer from './_component/Footer';
import Header from './_component/Header';
import Main from './_component/main/Main';
import SolutionChallenge from './_component/solution-challenge/SolutionChallenge';
import Review from './_component/review/Review';

import Apply from './_component/apply/Apply';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Review />
      <SolutionChallenge />
      <Apply />
      <Footer />
    </div>
  );
}
