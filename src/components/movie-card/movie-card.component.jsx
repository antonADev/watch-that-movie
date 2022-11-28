import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieHero from '../movie-hero/movie-hero.component';
import Details from '../details/details.component';
import Storyline from '../storyline/storyline.components';

import noImage from '../../assets/no-img.png';
import {
  MovieCardWrapper,
  MovieHeroWrapper,
  MovieDataWrapper,
  ProfileCarousel,
} from './movie-card.styles';
import Spinner from '../spinner/spinner.component';
import PeopleCarousel from '../people-carousel/people-carousel.component';
// const data = {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
//       genre_ids: [14, 35, 10751],
//       id: 642885,
//       original_language: 'en',
//       original_title: 'Hocus Pocus 2',
//       overview:
//         "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
//       popularity: 1225.705,
//       poster_path: '/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg',
//       release_date: '2022-09-27',
//       title: 'Hocus Pocus 2',
//       video: false,
//       vote_average: 7.5,
//       vote_count: 1094,
//     },
//     {
//       adult: false,
//       backdrop_path: '/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg',
//       genre_ids: [14, 12, 10751],
//       id: 532639,
//       original_language: 'en',
//       original_title: 'Pinocchio',
//       overview:
//         'A wooden puppet embarks on a thrilling adventure to become a real boy.',
//       popularity: 1033.698,
//       poster_path: '/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg',
//       release_date: '2022-09-07',
//       title: 'Pinocchio',
//       video: false,
//       vote_average: 6.7,
//       vote_count: 1063,
//     },
//     {
//       adult: false,
//       backdrop_path: '/e04iBCX3582bPRsYUb82texxZIY.jpg',
//       genre_ids: [16, 12, 35, 10751],
//       id: 1029119,
//       original_language: 'en',
//       original_title: 'Minions and More: Volume 1',
//       overview:
//         'This collection of Minions shorts from the "Despicable Me" franchise includes mini-movies like "Training Wheels," "Puppy" and "Yellow Is the New Black."',
//       popularity: 962.072,
//       poster_path: '/wCQBzTOigP5eCyBAjQGlWYNo5DR.jpg',
//       release_date: '2022-09-27',
//       title: 'Minions and More: Volume 1',
//       video: true,
//       vote_average: 7.2,
//       vote_count: 129,
//     },
//     {
//       adult: false,
//       backdrop_path: '/vFGDYJZA7NenGR1OaEGz0pKKFEs.jpg',
//       genre_ids: [16, 10751],
//       id: 438148,
//       original_language: 'en',
//       original_title: 'Minions: The Rise of Gru',
//       overview:
//         'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
//       popularity: 832.171,
//       poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
//       release_date: '2022-06-29',
//       title: 'Minions: The Rise of Gru',
//       video: false,
//       vote_average: 7.5,
//       vote_count: 2312,
//     },
//     {
//       adult: false,
//       backdrop_path: '/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg',
//       genre_ids: [12, 16, 35, 10751, 14],
//       id: 676701,
//       original_language: 'es',
//       original_title: 'Tadeo Jones 3: La Tabla Esmeralda',
//       overview:
//         'Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.',
//       popularity: 962.856,
//       poster_path: '/jvIVl8zdNSOAJImw1elQEzxStMN.jpg',
//       release_date: '2022-08-24',
//       title: 'Tad the Lost Explorer and the Emerald Tablet',
//       video: false,
//       vote_average: 7.7,
//       vote_count: 68,
//     },
//     {
//       adult: false,
//       backdrop_path: '/yEQqrW61rwNuVRHTjgHOAU4dXNE.jpg',
//       genre_ids: [28, 12, 10751, 35],
//       id: 675353,
//       original_language: 'en',
//       original_title: 'Sonic the Hedgehog 2',
//       overview:
//         'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
//       popularity: 751.474,
//       poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
//       release_date: '2022-03-30',
//       title: 'Sonic the Hedgehog 2',
//       video: false,
//       vote_average: 7.6,
//       vote_count: 3337,
//     },
//     {
//       adult: false,
//       backdrop_path: '/vcqqpzVyMiShaneJmAGbJ6i7bo1.jpg',
//       genre_ids: [10751, 14, 10770],
//       id: 936061,
//       original_language: 'en',
//       original_title: 'Under Wraps 2',
//       overview:
//         'As Marshall, Gilbert and Amy are preparing for her father’s Spooktacular Halloween-themed wedding to his fiancé Carl, plans go awry when they discover that their mummy friend Harold and his beloved Rose may be in danger.',
//       popularity: 657.603,
//       poster_path: '/y37QvulwOJ1uv0onnDB4ocWEQZn.jpg',
//       release_date: '2022-09-25',
//       title: 'Under Wraps 2',
//       video: false,
//       vote_average: 6.4,
//       vote_count: 25,
//     },
//     {
//       adult: false,
//       backdrop_path: '/qaTzVAW1u16WFNsepjCrilBuInc.jpg',
//       genre_ids: [16, 28, 10751, 35, 878],
//       id: 539681,
//       original_language: 'en',
//       original_title: 'DC League of Super-Pets',
//       overview:
//         'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
//       popularity: 707.242,
//       poster_path: '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
//       release_date: '2022-07-27',
//       title: 'DC League of Super-Pets',
//       video: false,
//       vote_average: 7.5,
//       vote_count: 923,
//     },
//     {
//       adult: false,
//       backdrop_path: '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg',
//       genre_ids: [16, 10751, 35, 14],
//       id: 508947,
//       original_language: 'en',
//       original_title: 'Turning Red',
//       overview:
//         'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.',
//       popularity: 558.078,
//       poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
//       release_date: '2022-03-01',
//       title: 'Turning Red',
//       video: false,
//       vote_average: 7.5,
//       vote_count: 3517,
//     },
//     {
//       adult: false,
//       backdrop_path: '/pUrabCPfEkAXdyml0FZ07rYwur0.jpg',
//       genre_ids: [35, 10751, 16],
//       id: 1034470,
//       original_language: 'en',
//       original_title: 'Barbie Epic Road Trip',
//       overview:
//         'In this interactive adventure, Barbie goes on a cross-country trek with friends and makes big decisions about the future. Which dream will she choose?',
//       popularity: 484.928,
//       poster_path: '/a2a1Y6a6UriLJ0U7cGjphPOWQPK.jpg',
//       release_date: '2022-10-25',
//       title: 'Barbie Epic Road Trip',
//       video: false,
//       vote_average: 6.5,
//       vote_count: 4,
//     },
//     {
//       adult: false,
//       backdrop_path: '/92PJmMopfy64VYjd0HvIQaHGZX0.jpg',
//       genre_ids: [10751, 35, 16, 28],
//       id: 366672,
//       original_language: 'en',
//       original_title: 'Paws of Fury: The Legend of Hank',
//       overview:
//         "A hard-on-his-luck hound finds himself in a town full of cats in need of a hero to defend them from a ruthless villain's wicked plot to wipe their village off the map. With help from a reluctant mentor, our underdog must assume the role of town samurai and team up with the villagers to save the day.",
//       popularity: 497.135,
//       poster_path: '/wMDUDwAArpfGdtTTZ25SfwngGwt.jpg',
//       release_date: '2022-07-14',
//       title: 'Paws of Fury: The Legend of Hank',
//       video: false,
//       vote_average: 6.7,
//       vote_count: 181,
//     },
//     {
//       adult: false,
//       backdrop_path: '/sobIeWp1a3saZTBkoRTAf8sfC7J.jpg',
//       genre_ids: [12, 10751, 10770],
//       id: 335795,
//       original_language: 'en',
//       original_title: 'Monster High: The Movie',
//       overview:
//         "Clawdeen Wolf, half human and half werewolf, has recently started attending Monster High, a school for monsters in all forms. After quickly befriending her classmates Frankie Stein and Draculaura, Clawdeen feels like she has finally found a place where she can truly be herself, or so she thinks. Soon, a devious plan to destroy Monster High threatens to reveal her real identity and Clawdeen must learn to embrace her true monster heart before it's too late.",
//       popularity: 448.767,
//       poster_path: '/tn3GWm0Erehkpur8PUuYWxGpul5.jpg',
//       release_date: '2022-10-06',
//       title: 'Monster High: The Movie',
//       video: false,
//       vote_average: 7.1,
//       vote_count: 126,
//     },
//     {
//       adult: false,
//       backdrop_path: '/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
//       genre_ids: [10751, 16, 14, 10402, 35, 12],
//       id: 354912,
//       original_language: 'en',
//       original_title: 'Coco',
//       overview:
//         "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
//       popularity: 458.56,
//       poster_path: '/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
//       release_date: '2017-10-27',
//       title: 'Coco',
//       video: false,
//       vote_average: 8.2,
//       vote_count: 16487,
//     },
//     {
//       adult: false,
//       backdrop_path: '/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
//       genre_ids: [16, 35, 10751, 14],
//       id: 568124,
//       original_language: 'en',
//       original_title: 'Encanto',
//       overview:
//         "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
//       popularity: 560.392,
//       poster_path: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
//       release_date: '2021-10-13',
//       title: 'Encanto',
//       video: false,
//       vote_average: 7.7,
//       vote_count: 7565,
//     },
//     {
//       adult: false,
//       backdrop_path: '/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg',
//       genre_ids: [16, 35, 10751, 14, 12],
//       id: 585083,
//       original_language: 'en',
//       original_title: 'Hotel Transylvania: Transformania',
//       overview:
//         'When Van Helsing\'s mysterious invention, the "Monsterfication Ray," goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it\'s too late, and before they drive each other crazy.',
//       popularity: 465.814,
//       poster_path: '/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg',
//       release_date: '2022-02-25',
//       title: 'Hotel Transylvania: Transformania',
//       video: false,
//       vote_average: 7.1,
//       vote_count: 1277,
//     },
//     {
//       adult: false,
//       backdrop_path: '/zoL7dO6Uw8wOtkhfrwryevQudSK.jpg',
//       genre_ids: [12, 9648, 35, 16, 10751],
//       id: 1015724,
//       original_language: 'en',
//       original_title: 'Trick or Treat Scooby-Doo!',
//       overview:
//         'Mystery Inc. has cracked the case to top all cases! They’ve tracked down Coco Diablo, the head of a notorious costume crime syndicate. With Coco and her kitty in prison, Mystery Inc. thinks that they can finally enjoy a break. Wrong! Suddenly, menacing doppelgänger ghosts of the Scooby crew and favorite classic foes show up in Coolsville to threaten Halloween. Now it’s up to the meddling kids to unmask the latest scoundrel and save Halloween!',
//       popularity: 391.407,
//       poster_path: '/wZccw4Hj9ZF1yimnfPsX9rl3HvB.jpg',
//       release_date: '2022-10-04',
//       title: 'Trick or Treat Scooby-Doo!',
//       video: false,
//       vote_average: 7.4,
//       vote_count: 114,
//     },
//     {
//       adult: false,
//       backdrop_path: '/hwUxHPkuUleJeoick4uZsrKDXxF.jpg',
//       genre_ids: [16, 28, 12, 10751, 878],
//       id: 718789,
//       original_language: 'en',
//       original_title: 'Lightyear',
//       overview:
//         'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
//       popularity: 403.434,
//       poster_path: '/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg',
//       release_date: '2022-06-15',
//       title: 'Lightyear',
//       video: false,
//       vote_average: 7.2,
//       vote_count: 2352,
//     },
//     {
//       adult: false,
//       backdrop_path: '/yBov7O4eXDcBLDpZrOHZzFr8rIl.jpg',
//       genre_ids: [16, 35, 12, 10751],
//       id: 459151,
//       original_language: 'en',
//       original_title: 'The Boss Baby: Family Business',
//       overview:
//         'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
//       popularity: 336.015,
//       poster_path: '/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
//       release_date: '2021-07-01',
//       title: 'The Boss Baby: Family Business',
//       video: false,
//       vote_average: 7.5,
//       vote_count: 2104,
//     },
//     {
//       adult: false,
//       backdrop_path: '/cuAUhb0aYQ9PsdU7EN3L2p1d3Ox.jpg',
//       genre_ids: [12, 35, 27, 10751],
//       id: 864959,
//       original_language: 'en',
//       original_title: 'The Curse of Bridge Hollow',
//       overview:
//         "A Halloween-hating dad reluctantly teams up with his teenage daughter when an evil spirit wreaks havoc by making their town's decorations come to life.",
//       popularity: 334.067,
//       poster_path: '/t6P9l6tcVnWLS1ADUAfkUCGQhm0.jpg',
//       release_date: '2022-10-14',
//       title: 'The Curse of Bridge Hollow',
//       video: false,
//       vote_average: 6.9,
//       vote_count: 281,
//     },
//     {
//       adult: false,
//       backdrop_path: '/i9BtOklh2txI78wNSTNjoAZ6Fvj.jpg',
//       genre_ids: [35, 10751],
//       id: 975120,
//       original_language: 'es',
//       original_title: 'Padre no hay mas que Uno 3',
//       overview:
//         "Christmas is coming. The children accidentally break a Nativity scene figurine from their father's collection and must by all means get an equal one, the problem is that it is a unique antique piece. Sara, the eldest daughter breaks up with her boyfriend, Ocho, who will try to recover her favors with the help of her father-in-law, Javier. Precisely Javier's father-in-law, Marisa's father, will be welcomed into the family home to spend the holidays after her recent separation, which will not leave Javier's mother, Milagros, indifferent. Rocío, the folklore of the family, who has been playing the Virgin for several Christmases, is relegated this year to playing the shepherdess, something that her father, Javier, is not willing to assume.",
//       popularity: 329.444,
//       poster_path: '/k2v9xSPtiyxCNxaRGtj7COwdgG3.jpg',
//       release_date: '2022-07-15',
//       title: 'Father There Is Only One 3',
//       video: false,
//       vote_average: 7.7,
//       vote_count: 150,
//     },
//   ],
//   total_pages: 1154,
//   total_results: 23080,
// };

// const data = {
//   adult: false,
//   backdrop_path: '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
//   belongs_to_collection: {
//     id: 751156,
//     name: 'Hocus Pocus Collection',
//     poster_path: '/1w8K4Dt3WOyCPpe94HY0rA9UXUj.jpg',
//     backdrop_path: '/ep3u73OsN6PSxed9TFJnWqjwrdO.jpg',
//   },
//   budget: 30000000,
//   genres: [
//     { id: 14, name: 'Fantasy' },
//     { id: 35, name: 'Commedia' },
//     { id: 10751, name: 'Famiglia' },
//   ],
//   homepage: '',
//   id: 642885,
//   imdb_id: 'tt11909878',
//   original_language: 'en',
//   original_title: 'Hocus Pocus 2',
//   overview:
//     'Dopo 29 anni, la Candela dalla fiamma nera è stata accesa riportando in vita le sorelle del 17° secolo, che ora cercano vendetta. Toccherà a tre liceali impedire alle diaboliche streghe di scatenare di nuovo scompiglio su Salem prima dell’alba della vigilia di Ognissanti.',
//   popularity: 984.99,
//   poster_path: '/ejmMQggGCqTvKw0HbJkfj9qFWmR.jpg',
//   production_companies: [
//     {
//       id: 2,
//       logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
//       name: 'Walt Disney Pictures',
//       origin_country: 'US',
//     },
//   ],
//   production_countries: [
//     { iso_3166_1: 'US', name: 'United States of America' },
//   ],
//   release_date: '2022-09-27',
//   revenue: 0,
//   runtime: 105,
//   spoken_languages: [
//     { english_name: 'English', iso_639_1: 'en', name: 'English' },
//   ],
//   status: 'Released',
//   tagline: 'Le streghe son tornate',
//   title: 'Hocus Pocus 2',
//   video: false,
//   vote_average: 7.539,
//   vote_count: 1100,
// };

const MovieCard = ({ status, movie, credits, message }) => {
  // const conditionalComponent = () => {
  //   switch (status) {
  //     case 'loading':
  //       return <Spinner />;
  //     case 'idle':
  //       return (
  //         <>
  //           <MovieHeroWrapper>
  //             <Hero
  //               title={data.title}
  //               //Year original format yyyy-dd-mm
  //               year={data.release_date}
  //               backdrop={
  //                 !data.backdrop_path ? data.poster_path : data.backdrop_path
  //               }
  //             />
  //           </MovieHeroWrapper>
  //           <MovieDataWrapper>
  //             <Details
  //               vote={data.vote_average}
  //               voteCount={data.vote_count}
  //               releaseDate={data.release_date}
  //               poster={data.poster_path}
  //             />
  //             <Storyline text={data.overview} />
  //           </MovieDataWrapper>
  //         </>
  //       );
  //     case 'error':
  //       return <h2>Error</h2>;
  //     default:
  //       break;
  //   }
  // };

  return (
    <MovieCardWrapper>
      {status === 'loading' && <Spinner />}
      {status === 'idle' && (
        <>
          <MovieHeroWrapper>
            <MovieHero
              title={movie.title}
              genres={movie.genres}
              //Year original format yyyy-dd-mm
              year={movie.release}
              backdrop={!movie.backdrop ? movie.poster : movie.backdrop}
            />
          </MovieHeroWrapper>
          <MovieDataWrapper>
            <Details
              vote={movie.voteAverage}
              voteCount={movie.voteCount}
              releaseDate={movie.release}
              poster={movie.poster}
              crew={credits.crew}
            />
            <Storyline text={movie.overview} />
            <ProfileCarousel>
              {credits.cast?.map((el) => (
                <PeopleCarousel
                  key={el.id}
                  imagePath={
                    el.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`
                      : `${noImage}`
                  }
                  name={el.name}
                  character={el.character}
                />
              ))}
            </ProfileCarousel>
          </MovieDataWrapper>
        </>
      )}
      {status === 'error' && <h1>Error</h1>}
      {/* {conditionalComponent()} */}
    </MovieCardWrapper>
  );
};

export default MovieCard;
