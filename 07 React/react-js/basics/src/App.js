import React, { useState } from 'react';
import Apples, { Bananas1, Orange } from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';
import ExternalStyling from './components/03-styles/03-external-styling';
import ExternalModuleStyling from './components/03-styles/04-external-module-styling';
import SassScss from './components/03-styles/05-sass-scss';
import DijitalSaatUygulamasi1 from './components/04-dijital-saat-uygulamasi1/dijital-saat-uygulamasi1';
import Greetings from './components/05-props/01-greetings';
import Products from './components/05-props/05-products';
import DijitalSaatUygulamasi2 from './components/06-dijital-saat-uygulamasi2/dijital-saat-uygulamasi2';
import Image from './components/07-images/01-image';
import ImageGallery from './components/07-images/02-image-gallery';
import ProfileCard from './components/08-profile-card/profile-card';
import BootstrapKlasikYontem from './components/09-bootstrap/01-bootstrap-klasik-yontem';
import BootstrapModernYontem from './components/09-bootstrap/02-bootstrap-modern-yontem';
import ReactIcons from './components/10-icons/01-react-icons';
import MaterialIcons from './components/10-icons/02-material-icons';
import Events from './components/11-events/events';

// STYLE IMPORT
import './assets/scss/style.scss';
import ProductShop from './components/12-product-shop/product-shop';
import State from './components/13-usestate/01-state';
import Counter1 from './components/14-counter1/counter1';
import Birthday from './components/15-birthday/birthday';
import UseEffect from './components/16-useeffect/useeffect';
import { Button } from 'react-bootstrap';
import DijitalSaatUygulamasi3 from './components/17-dijital-saat-uygulamasi3/dijital-saat-uygulamasi3';
import FilterList from './components/18-filter-list/filter-list';
import UseRef from './components/19-useref/useref';
import ClassTurundeComponentler from './components/20-component-turleri/01-class-turunde-componentler';
import FonksiyonTurundeComponentler from './components/20-component-turleri/02-fonksiyon-turunde-componentler';

const profileCardData = {
  firstName: 'Emir',
  location: 'New York',
  image: 'person4.jpg',
  statistics: [
    { title: 'Likes', stat: 145 },
    { title: 'Photos', stat: 7 },
    { title: 'Following', stat: 329 },
  ],
};

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Apples />
      <br />
      <Bananas1 />
      <br />
      <Orange />
      <br />
      <Jsx1 />
      <br />
      <Jsx2 />
      <br />
      <Jsx3 />
      <br />
      <Jsx4 />
      <br />
      <InlineStyling />
      <br />
      <InternalStyling />
      <br />
      <ExternalStyling />
      <br />
      <ExternalModuleStyling />
      <br />
      <SassScss />
      <br />
      <DijitalSaatUygulamasi1 />
      <br />
      <Greetings />
      <br />
      <Products />
      <br />
      <DijitalSaatUygulamasi2 textColor="white" bgColor="red" />
      <br />
      <Image />
      <br />
      <ImageGallery />
      <br />
      <ProfileCard
        name="Walker"
        location="Nashville, Tennesse"
        image="profile-card.jpg"
        statistics={[
          { title: 'Shot', stat: 2 },
          { title: 'Follower', stat: 234 },
          { title: 'Following', stat: 327 },
        ]}
      />
      <br />
      <ProfileCard
        name="Kyle"
        location="London"
        image="profile.jpg"
        statistics={[
          { title: 'Likes', stat: 50 },
          { title: 'Photos', stat: 12 },
          { title: 'Following', stat: 10 },
        ]}
      />
      <br />
      <ProfileCard {...profileCardData} />
      {/* <ProfileCard
                name={profileCardData.firstName}
                location={profileCardData.location}
                image={profileCardData.image}
                statistics={profileCardData.statistics}
            /> */}
      <br />
      <BootstrapKlasikYontem />
      <br />
      <BootstrapModernYontem />
      <br />
      <ReactIcons />
      <br />
      <MaterialIcons />
      <br />
      <Events />
      <br />
      <ProductShop />
      <br />
      <State />
      <br />
      <Counter1 />
      <br />
      <Birthday />
      <br />
      <Button onClick={() => setShow((prev) => !prev)}>
        use Effect Hook'unu Gizle
      </Button>
      {show && <UseEffect />}
      <br />
      <DijitalSaatUygulamasi3 textColor="gold" bgColor="brown" />
      <br />
      <FilterList />
      <br />
      <UseRef />
      <br />
      <ClassTurundeComponentler />
      <br />
      <FonksiyonTurundeComponentler />
      <br />
      <br />
    </>
  );
}
