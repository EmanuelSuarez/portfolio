import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Emanuel Suarez - React Developer </title>
      </head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 