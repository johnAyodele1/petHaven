import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.root}>
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className={styles.logoText}>Pet Haven</h2>
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
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input placeholder="Search" className={styles.searchInput} />
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
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
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
                  <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                </svg>
              </button>
            </div>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtnIXlBC0uQGPUwQSq8DjwAJGlREGjrbQOiBIRbclcng4uIe24YZN8nR77VQSPHTxLshGPTsmSeeT_ztEwW3w2YHKSLXmWh59aCfQOUxyNIgy0LfHGlYf6qbhCr_7lvUeHhseFjj-1XWBuET3UAvvsJmBu1ONd9TQqrqiy-GPdbb6qllV-rTOP70dwr3PC1xr1vD4JIYNQTo882n9oUNSknvO4VZVHtjDzAOGIspTTnLS-awRKJ3Adah0QS6SVLMpR5k-GT3AFq-I")',
              }}
            ></div>
          </div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Find Your Perfect Companion</h1>
              <h2 className={styles.heroSubtitle}>
                Explore a wide variety of pets and pet supplies to meet your
                needs.
              </h2>
              <div className={styles.browseButtonDiv}>
                <button className={styles.browseButton}>Browse Pets</button>
              </div>
            </div>
          </div>
          <section>
            <h2 className={styles.sectionTitle}>Featured Pets</h2>
            <div className={styles.featuredPets}>
              {[
                {
                  name: "Buddy",
                  breed: "Golden Retriever",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCH6kkNTGsIwDr5GswhfnC2aCtV8ypAdq32BwCKGFPIjw5cDgs_IGHp5SEweN80bNFL-6Q8iDZ2p4glxxJ5nBbN4DaT-Q4Z3_U5BzOc5Li5k1r73-S2Puz8OVhpH79H7GBIwcsGkaiQhdDmSeIDlEByTYn8iH0hXUsfzJib1cyrtyj41jn3vgNEmgLZvh6W9qzpZsxSY9wHm9vxnpxMj5mjzlc3r3sQ7dyMbIwRiGQvbIz3ZSFGSHWQn0J_b5Y4PsBZQAxUlixh9Bk",
                },
                {
                  name: "Snowball",
                  breed: "Siamese Cat",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJnWcxj7x_t6uXWbrDd9UdLG_l55NXzmQPKF9ft7jnPFJYCVzN05JY3eKtvWv-DdNJWL3i2D-CctEmVzbrykDwGXTLYrbxCutSlb0QjG5eBGnznOyoNhXrziZDX-A_zZscmVSd0Ly1DXGas5qiALlMTRhj6yKCnBA8uFxWIXzUGJxOiMvyheyJMoIf_n5yOJQDu5ds5po6ny-BVYYzr7EY_rHPXorqnRhFthG00PGKF6eAIIK0fNKbEpKDwZKBPUxZXiUMTiPWkpI",
                },
                {
                  name: "Max",
                  breed: "German Shepherd",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC7ABZDTy8DQCXCsTqnB6t19DM6wFFCp6ieaEmQ5Amcc7mhAVSKv7v7lXGvK6VKkDuXFLdLWoTFbq5hwvME_TpuCexvW9K9st1hO93mg83Fg_RNUcs-I7A-cD-_aOURAOWgb9qpzeGdSwW0d9ZwlcVbdr4MniEVsKlsWMG8udv-EzwpX_I5vuf3vCyLyvWtfuwjXXbnfld_2umPty7w4NYUtR4c-zRfibYRB2H2zjjxoKLLAl6ST4qy_8VSQC_pbAcKPvfnHkFeJ8E",
                },
                {
                  name: "Fluffy",
                  breed: "Persian Cat",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8CGZWnNI6m-J7QL8rW4AmAHYK49NV-MXUR13IwUjlwtooGycJAMKkwmcJIIzGWP6JahxDmm8N-bUYJNmAOkeSuiBz-b2GNF05vMhpHu9sXiHPbhczrmezlC9NgIAkbJ9MfhInz5RfHFp0gA-eTCC3NvnAa22Fu1W85xhwP7SsqnVMKrc7U8luDJf_DO2u6rjBMJdwjsNVYbUiKQAxynQ3R3n8UxSw2Q16VVPbjK1V7KZ6U7JhfKWNtYS65jdmzMeDaWh8IIYXo4I",
                },
                {
                  name: "Charlie",
                  breed: "Beagle",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCBJkZZ3DJAGzd3YsnDwChcZA9ssocp1XeDTBtubYUhnbf6Agc_jENg2GB_umqXa45HzFUa4MQVVV09GSo5LuisUMO2E2_EzKaL4CTUL84B9OjqKU_SONhX8BJmvpoc9_KO9knxzvRDZDq9y8mPcWTCN3pLDf8RsVHu18F0PX_xCHgqKSoweQYdPYofVSKUR01pm5c5iY_YBHBThxMDrPlf53iEn9_4zH5Yfj3R5scfbThDb015BCIQjauAvQxZTNz3ob86dV9nKAM",
                },
              ].map((pet) => (
                <div key={pet.name} className={styles.petCard}>
                  <div
                    className={styles.petImage}
                    style={{ backgroundImage: `url(${pet.image})` }}
                  ></div>
                  <div>
                    <p className={styles.petName}>{pet.name}</p>
                    <p className={styles.petBreed}>{pet.breed}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className={styles.sectionTitle}>Popular Items</h2>
            <div className={styles.popularItems}>
              {[
                {
                  name: "Cozy Pet Bed",
                  description: "Soft and comfortable bed for your pet",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAt89-3cUU2kAimC1oLC1hbMM2DNe4G8DfEq-QHDTTi17HiuM0VQiGZrS5q2a6UmgjltmY-A9pWbl9HsEWaqWUKsCKJyinv7zzsENib5ToJsPiU9Jz8pHaRjz7RTgxZ5Uc1tl84Mzz1yJdiYct8OYpfsXZ3SwIL_gcSNLW5HzhzXL3Eo_o-6vOSUOr0p_RLku6D0V7EQ1u5yjEqEy-_UfmBnCDqIDZ80Wm4GROfQEzlxQ85K0NlHsGVVE7vzIf1qG1reaTG4IC2HmE",
                },
                {
                  name: "Interactive Cat Toy",
                  description: "Engaging toy to keep your cat entertained",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkP48wxJ73ebrd65ol9rUREM8_fZF498aI4sCRS30LF-Svj7G4eK7xzQvBR4vTKDTxNgpnyAHqCwgJGfaD7lMjueyqPH6K-24BbyjkMeLWj-_jwHep1n3MQpbkqknsBrxKFpRa9b1ua4YGpUvi9tWyeFQR-tfUFRc1gwKooJL4VKcGLO3p7GU1J508dwhL61IsdSePzWDFzkX8ui4AK7no5YdK4Vpz86WbKGRpnQmVWrD0h5NjHkB0hoYvrv9dRvUYl9nJsE4QOnk",
                },
                {
                  name: "Durable Dog Leash",
                  description: "Strong leash for safe walks",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuB19qO8Wwa4PFSsOPDfoyslyiUxD_l6MnO896cizHFrKEPSlaxy3plYxJ-gr8aoqPknrZkmwUMuLjED0tZuZvZAWKAKChELBFoW69Jg6Ij_puQJa57IQFs8N9yC_TSUkjOBDFaELbRujsYrQr_lp_HVnmH4gTwjU8qsVISsMkge-ZkNCgaIiTqFA1VQTLgTp8du_X0uV-Ya8CQLWJoJnq-r5bfW4PfIcV7uS4kxPEYzGc184JbOystsrzAPxp-tpKOxEGnLWGtSp4w",
                },
                {
                  name: "Healthy Pet Treats",
                  description: "Nutritious treats for training and rewards",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDRdg0D1KN3qGRWdPacnpmgygaoqwYCKskgk9MeIDDIl5ZcungSykKOf73Bd17IIRp34pc8kdlUf2RVv7svUVV-Livuqxuf7UXsAvYbtQnmbEMg9mhbgtfbyiZqQXdYKokYOHamh-tQT3P8_9f9suIOOQPBLV8tfTqFeQWhzdOCJc4Zt_1LpgKPgt5MGyXyg9uaaBYwFehTHK6U6Ef2BWijDmX3OfLD9DScYW2tVFiQcI4UmKB4_PI6vWXN7yFijod-hgtprhuLDnc",
                },
              ].map((item) => (
                <div key={item.name} className={styles.popularItemCard}>
                  <div
                    className={styles.popularItemImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div>
                    <p className={styles.popularItemName}>{item.name}</p>
                    <p className={styles.popularItemDescription}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className={styles.sectionTitle}>Quick Links</h2>
            <div className={styles.quickLinks}>
              <div className={styles.quickLinkItem}>
                <div className={styles.iconPaw}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z"></path>
                  </svg>
                </div>
                <h2 className={styles.quickLinkText}>Vet Services</h2>
              </div>
              <div className={styles.quickLinkItem}>
                <div className={styles.iconStethoscope}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M212,152a12,12,0,1,1-12-12A12,12,0,0,1,212,152Zm-4.55,39.29A48.08,48.08,0,0,1,160,232H136a48.05,48.05,0,0,1-48-48V143.49A64,64,0,0,1,32,80V40A16,16,0,0,1,48,24H64a8,8,0,0,1,0,16H48V80a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V40H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16V79.17c0,32.84-24.53,60.29-56,64.31V184a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM224,152a24,24,0,1,0-24,24A24,24,0,0,0,224,152Z"></path>
                  </svg>
                </div>
                <h2 className={styles.quickLinkText}>Boarding</h2>
              </div>
              <div className={styles.quickLinkItem}>
                <div className={styles.iconHouse}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                  </svg>
                </div>
                <h2 className={styles.quickLinkText}>Mating</h2>
              </div>
              <div className={styles.quickLinkItem}>
                <div className={styles.iconHeart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                </div>
                <h2 className={styles.quickLinkText}>Community</h2>
              </div>
            </div>
          </section>
          <section className={styles.joinSection}>
            <div className={styles.joinContent}>
              <h1 className={styles.joinTitle}>
                Join Our Pet-Loving Community
              </h1>
              <p className={styles.joinDescription}>
                Connect with other pet owners, share tips, and find support.
              </p>
              <div className={styles.joinButtonWrapper}>
                <button className={styles.joinButton}>Join Now</button>
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <footer className={styles.footerContent}>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>
                  About Us
                </a>
                <a href="#" className={styles.footerLink}>
                  Contact
                </a>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
                <a href="#" className={styles.footerLink}>
                  Privacy Policy
                </a>
                <a href="#" className={styles.footerLink}>
                  Terms of Service
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
              </div>
              <p className={styles.footerCopyright}>
                @2024 Pet Haven. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
