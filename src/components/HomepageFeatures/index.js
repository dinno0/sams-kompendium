import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Zostań ratownikiem medycznym SAMS',
    description: (
      <>
        Chcesz nieść pomoc innym i dołączyć do jednej z najważniejszych frakcji w San Andreas? Nasz zespół medyczny szuka ludzi takich jak Ty!  
        <br /><br />
        <a
          className="button button--primary"
          href="https://forms.gle/jH6HjaDD5qK5MLS18"
          target="_blank"
          rel="noopener noreferrer"
        >
          Złóż podanie teraz
        </a>
      </>
    ),
  },
  {
    title: 'Dlaczego warto?',
    description: (
      <>
        Oferujemy przejrzystą strukturę awansów, przyjazny zespół, profesjonalne szkolenia i systemy medyczne dopracowane pod immersję RP.  
        <br />Dołącz i rozwijaj się z nami!
      </>
    ),
  },
  {
    title: 'Czego oczekujemy?',
    description: (
      <>
        Szukamy osób odpowiedzialnych, komunikatywnych, grających zgodnie z zasadami RP.  
        Jeśli jesteś gotowy nieść pomoc, to miejsce jest dla Ciebie!
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
