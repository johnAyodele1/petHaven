import React from "react";
import styles from "./findPet.module.css";

const FindPet = () => {
  return (
    <div className={styles.designRoot}>
      <div className={styles.layoutContainer}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logoSection}>
              <div className={styles.logoIcon}>
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className={styles.logoText}>PetPal</h2>
            </div>
            <nav className={styles.navLinks}>
              <a href="#" className={styles.navLink}>
                Adopt
              </a>
              <a href="#" className={styles.navLink}>
                Shop
              </a>
              <a href="#" className={styles.navLink}>
                Services
              </a>
              <a href="#" className={styles.navLink}>
                Community
              </a>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <label className={styles.searchLabel}>
              <div className={styles.searchInputWrapper}>
                <div className={styles.searchIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.searchInput}
                  value=""
                  readOnly
                />
              </div>
            </label>
            <div className={styles.headerButtons}>
              <button className={styles.iconButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                </svg>
              </button>
              <button className={styles.iconButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
                </svg>
              </button>
            </div>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQxjRAy595mFVfwgCRWjagTXS0tpsm-99TKzRdeXh1F3AsKR8rJMm9BfOzqpFHRPfMP-qI--5sgIE2ZFOn4AnBqDrZVpcXPbjS2JIm2nO0tBxo_hZgRzM1ohmNluX7Aw6CY1NBgOdsiizvkKaHcJ0PEnD8TRm_lfDSiAdQpEJDl5u2GQEsYc8adaeM_wrRUg2sThCy03LsI5oQui08NKQxRq7TPQ3jK-vWIGpl7rjrS9nZKAeiPKhDAhrrVwk4BMzRjwG9P5kBupM")',
              }}
            />
          </div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.contentContainer}>
            <div className={styles.titleRow}>
              <p className={styles.titleText}>Find your perfect companion</p>
            </div>
            <div className={styles.searchSection}>
              <label className={styles.searchLabelMain}>
                <div className={styles.searchInputWrapperMain}>
                  <div className={styles.searchIconMain}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for pets"
                    className={styles.searchInputMain}
                    value=""
                    readOnly
                  />
                </div>
              </label>
            </div>
            <h2 className={styles.featuredPetsTitle}>Featured Pets</h2>
            <div className={styles.featuredPetsScroll}>
              <div className={styles.featuredPetsList}>
                {[
                  {
                    name: "Buddy",
                    breed: "Golden Retriever",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFXzdfgMmhSIHXdgf_-2Ww9Pg8ynXbr7YFb-TqaVz7Aqgs1crTxHVK3Gnmpa6XU-Q6zV0Y64ZBK_Zg0Sa9AwXF5-K8PEEjt5psG22wnYlimkW2w10uFp_BzcJPgdg_fI_iMEQdf1AWJdE8trcNIzhIoGK4Ig7FpYvObgUljdsQVpHgCS-Y3R1ysJyAm3r4ke9qYTEfvW0uJHkdYYAo7WdQH16S4rSt55r7bVdmAdl_goeoBA9w9pTGAIw2Y9I9R-F_c82X_kJsFNo",
                  },
                  {
                    name: "Snowball",
                    breed: "Siamese Cat",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAvcA1HTkPZ6buDHzqKz3TmEme8KU2eEyIPt0ESv312EwjhOlUJOmBq-IIL33OjlhPesU7b0cmeBSA22qCAKXCAUiLySXlPeEEti80lyHCDz6Eyv1MZmK34KLY9OnkjTa0HtBGWDoUbWd95KC0dwU5XvLTVIyL1AjppOoQfliXx3QkO5z4srFO5-0eYy9zjYkOKSzTI2NjThR9BDxw2BZkC-BVwyswx8vC4F3mfXi5PLuNqu06NBrAVC6HZAL2yemnXvD3rtfe_xI",
                  },
                  {
                    name: "Max",
                    breed: "German Shepherd",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfgkSvU5ESi25NybnckNuJRVK7cvicaY2xiINr-ReCoAvBIJwJliVShQ2JmbiDLkTftg3BOhy86yjrn0JpH6MoDiXSzcuD_tDiAGfnfzocD_JXgMiPQayHMex0ebM3Lh48MQJAxGs4SbVJee18PEJxevWN7yVoOg2OvrJEVSHwN32lgbxq4VzU7dhIn9erERHf9sd-AIjP1dCFlsfc9KsWpnls73bBv-kZ8kKVh7qEmNi5XJCybqMQk-4iYdhDR64oJwUV-M9KV6c",
                  },
                ].map((pet, index) => (
                  <div key={index} className={styles.featuredPetCard}>
                    <div
                      className={styles.featuredPetImage}
                      style={{ backgroundImage: `url(${pet.image})` }}
                    />
                    <div>
                      <p className={styles.petName}>{pet.name}</p>
                      <p className={styles.petBreed}>{pet.breed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className={styles.allPetsTitle}>All Pets</h2>
            <div className={styles.petCategories}>
              {["Dogs", "Cats", "Birds", "Rabbits", "Hamsters"].map(
                (category, index) => (
                  <div key={index} className={styles.petCategory}>
                    <p>{category}</p>
                  </div>
                )
              )}
            </div>
            <div className={styles.allPetsGrid}>
              {[
                {
                  name: "Bella",
                  breed: "Labrador Retriever",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAE3g4-Xfq2DyaWsL9v1RGmB5IkRYa9pXzVTA1rGNTBUPXh4iHN8jUcxlIjCC-K6Qcbpirtj0MbtVE0UkuT8FNulEf1dIbbH1j-BKVyfp0NLYqUnCr2eR1PbkfyVjP5o9ezWjmFDedFMlHMcA52eX9ht_d4aygCWZFIOIFp3kdqagch9y7lyGe3aeF7_lK5xjJWjdE_4tHcaGu9QVs_JMM6S6b6-cnobP1UnFPlAUMnJ1wA6BE1VcoAH8MDnmctSpY0PZTt0Z-07Vc",
                },
                {
                  name: "Charlie",
                  breed: "Beagle",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPuC8E0yagePkqZt2JVyfxb_EHhayDpJKU8UDy6SIESSCbTIKKqcrh02QO6bNr745y3hrhwGSdnOa9VnhQQZwk9Jlmjg3Gcup8029KJsMW-o5LibIkyD18P_I6sdKfA82gKZtmUzcns9gkOgezdMMvUH_6qBfVhaC02AFDH0ZusXVKS6EbvSfcU8twMiSxnUatk4DulLNaHXaFNtTAiixTp1h5iRG1e230C0srjqozKecXHOEA9moSqtdrn46Wb9zB5txIQAchQGg",
                },
                {
                  name: "Lucy",
                  breed: "Poodle",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAop63h3krg-800wIRAA7NxwMBpWxZ_V7J47LJKawRbR2nyaCUR16JgW5goscvfcpnqGkwi1QbRttLCnaR1l5Wa1SqnAUZ3az1kUloRlsyXwQZNzaQI80UttGJ4DK9RhxRkwORn2GF37Z40IyDJ4VZZqqnJJ1kwaaFUygThO8iy9UM6tFFZYrr-vqTf4cMtNH8KuAuVrloP4hVzclThzj-aD2APOIsVV0LhLfI7TWN8D-6i9xDheRDSXweWu9nRCONltac0aYIbpeI",
                },
                {
                  name: "Cooper",
                  breed: "Boxer",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHMsISYU_51jTMTXTNkoHrrQxM3-5MrL1T_gIVXOHuIa5kJg5_6AKmVuxI4ma3g6yKRKTsNG49X90ASLE6IAPgk2XM5lWJ_XjY1BoYwnrD9p3FNyN9fatdWW2ympJIb5VIlAl3Fn49U3-cxKiqiHKCfEDBDY7aK5A05k269mTB8y7KpWqKtNTR6UkxY8F8-HUDzfSYa4dpFvypzxV6THZoanO527VqCA-1Ur2HDxqKR44Ft-ZnhpjUxM1pjT_rjfOSnIgDtaqE2Zs",
                },
                {
                  name: "Rocky",
                  breed: "Bulldog",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDweosyGAiwfCK-_Hzy0wZNSMshz-UWMIBHNokYEKk1ty8UachCpxKMoRe3J0oTtOhWWT4NQ-18tsyeqMGbJPilcRWlOeHDoqQul5SjqNMW2_RFqMrVUQkLhqYt8Jaw7k5cz9mUy0Az_QlEunoslk45tOIQWfIR0vDw38S71b9CD2WlnatgPVO7dOgByeqO7f7bnBDoUgomRXt2Z7Kw6Di6yy0dohXRR4-gXr6izRXnliyq0pizhVpAeBEzCZ1dgX6kqxDLOrIoixI",
                },
                {
                  name: "Fluffy",
                  breed: "Persian Cat",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDs4Ydj-8frkPsVPoPIbTBYkqi1_mtFKb0VqhsYN6lr4NMs0y6pZeaZelVFtSROdwyad8BdItCbNu5rlejhGZimpDza3ZQQ7J4RPnnOTWKgMEtDB7ryfypp9fXaTPtyR_G69MlD_hVagck8N36ZA-RMReb2Yiy-_Kl1eEyUE6ff2LkPsjL7YMXzPbRAAu7-k-BfvJqEgOteR_U61m4XDlHiWR0FnhyCXfGaxvcvslCNzJaI4284MQit3RS4w3eTzS6q0lyg_g7NHU0",
                },
                {
                  name: "Tucker",
                  breed: "Dachshund",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUiJ6hgt0ltbqOitYfUzCkmdIiIFGSLrbHrEPntnXDQSyjbBm94pqWfB_FEussaS7zScls91Eg9pHy1lbD7Nxj4fuL_NQh3ysl5MUD5tAdxpkiNTlYniL4F7BOQ7R19sdD308YBJ9EChPVYZ0fTFKL-rFHAU3R-jYIMP0eG-KAV1umAKUgd68vENOj5G26uedcpc7uQlzZsv8L-kn990hqmRX9bMLRwJHJruKIEss3LZ0vZ0B_jdwy3NWBszPJC693zPp8KFKXGYg",
                },
                {
                  name: "Oliver",
                  breed: "Golden Retriever",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoaVoJflUwpVMt47Z3O-Q1jhaQ4yJxnL9kzqHWOEV-z6EgOlOyYOzXfiEM7l9Osb32vZepQx-Mp_y7K6Yr3oOp_FTpnR4jssi6_U8FtpcggHAJe0TXqyk0JVZl-KGMFPimoQYG24Q0R5lEuCCxLiMh3I9a9M7rimh6jaXpu_gvq5g0yd4IC1rfVcAI95vsXis2x7MPFvnBN95M63Fw5WmrfUzNwN1pv9m8EVcgG_ADUm_IUFW3_8r_9RblOA5zqsnHjFv13qtynZ8",
                },
                {
                  name: "Molly",
                  breed: "French Bulldog",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBlybV2cR-37XW5OKcj0A9ARyl9nNwvyy1hbzKLpIsjsbPs3j0BRfWyrc5PZ_z2WMhhwSHTnR_IJKX5AzmolnhcKpVKS0SFBEMdMPR2zvVbh4fBONFm7hUsXR3UAIQafAw2SwZM2FPCzA0lFSNemPF9-MLxoKNI2y2XVgwnJXOIjyWXypwkIa0ZadcJ0CD4Xcu0jdJUt6NPsGW-4MoAaqRQOFSE0DxsXX6nuKtPF1m11HTHD0J9SwIncl_syNC98J7-6Y4p_Nrl3YU",
                },
                {
                  name: "Jack",
                  breed: "Rottweiler",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIa_hq2GpAMhlFIVG-ffMgOCTFHWAZHleoPP4zU_R4rxBooWi47A8_njGXi9YiwhMs-XNl-Vj9DlWpbtW5EcHVmjWAg2hr9ujfLJUneUD7XlvNLvQi5syhGBAQ0JfTG6RezJHXm9fLrzHfKfjh5CmqPwIfKBKN_fdVDv94LF4E9v-n6ROu8yh_BFi2s6mpkLF-LtWq1BK32DbKOAHy9N2dEQjhGX-v9s8mfFcn5IroxS1vrIrn5OwZVM20KPgigapaBxFyzbtUjXE",
                },
                {
                  name: "Chloe",
                  breed: "Australian Shepherd",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCVYKsleit79ba7JeOodHWqDycmIoSYeNAwtpUF0diOeX4amqIIZWqDdRKbfyBDXlgXZd3xr3KmGM_ncQtkEHEqCgTmPke82UeHUdi8SOERuwXX7igDRJUJYqbXsn0E2spbUINX9CwUz_zqt98ej68Jk1GK1jgV3AcBqItA8j1rXoDvlPulONVAEgsC85W5CxeBKjr3eQUkxq-c8iWkNkz3qJ67NEciCtReq0IOpW2NotsEi-tJP4yYu6PY_4Cp8HdHlwaQpEEiBQ4",
                },
              ].map((pet, index) => (
                <div key={index} className={styles.allPetCard}>
                  <div
                    className={styles.allPetImage}
                    style={{ backgroundImage: `url(${pet.image})` }}
                  />
                  <div>
                    <p className={styles.petName}>{pet.name}</p>
                    <p className={styles.petBreed}>{pet.breed}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.pagination}>
              <a href="#" className={styles.paginationArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                </svg>
              </a>
              {[1, 2, 3, 4, 5].map((page) => (
                <a
                  key={page}
                  href="#"
                  className={
                    page === 1
                      ? styles.paginationActivePage
                      : styles.paginationPage
                  }
                >
                  {page}
                </a>
              ))}
              <a href="#" className={styles.paginationArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FindPet;
