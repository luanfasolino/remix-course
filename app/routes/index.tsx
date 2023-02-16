import { Link } from "@remix-run/react";
import homeStyles from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to={"/notes"}>Try now!</Link>
      </p>
    </main>
  )
}

//this will automaticly found by remix
//it is be the same of typing <link rel="stylesheet" href="styles.css">
export function links() {
  return [{rel: 'stylesheet', href: homeStyles}];
}
