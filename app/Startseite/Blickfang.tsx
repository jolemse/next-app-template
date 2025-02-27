'use client';

import { AspectRatio, Button, Container, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Blickfang.module.css';

export default function Blickfang() {
  const larger = useMediaQuery('(min-width: 48em)');
  const mobile = useMediaQuery('(max-width: 47.99em)');
  //const wide = 21 / 9;
  const square = 1 / 1;
  return (
    <>
      <AspectRatio ratio={square} style={{ maxHeight: '600px' }}>
        <div className={classes.gradient}>
          <Container
            style={{ position: 'relative', width: '100%', height: '100%', color: '#ffffff' }}
          >
            {larger && (
              <div style={{ width: '70%' }}>
                <h1>Finde Deinen Weg zur beruflichen und persönlichen Erfüllung</h1>

                <p>
                  Ivymind ist Deine Online-Plattform für Achtsamkeit, Selbstliebe und beruflichen
                  Erfolg. Finde Deinen passenden Coach oder Kurs, um Deine Herausforderungen für
                  eine Neuorientierung zu meistern.
                </p>

                <Link href="/perfect_match">
                  <Button size="md">Finde deinen Coach</Button>
                </Link>
              </div>
            )}

            {mobile && (
              <div style={{ width: '80%' }}>
                <h1>Finde Deinen eigenen Weg</h1>

                <Link href="/perfect_match">
                  <Button size="md">Finde deinen Coach</Button>
                </Link>
              </div>
            )}

            <div className={classes.bottom}>
              <Image
                src="/img/Startseite/landingpage.png"
                alt="Image 1"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: '45%',
                  transform: 'translateX(5%)',
                  zIndex: 1,
                }}
              />
              <Image
                src="/img/Startseite/Slant.svg"
                alt="Image 2"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%) translateY(1%)',
                  zIndex: 5,
                }}
              />
            </div>
          </Container>
        </div>
      </AspectRatio>
      {mobile && (
        <div className={classes.solidBackground} style={{ paddingBottom: '0' }}>
          <Container style={{ paddingBottom: 'inherit' }}>
            <h3 style={{ marginBottom: '0' }}>
              Finde Deinen Weg zur beruflichen und persönlichen Erfüllung
            </h3>
            <p style={{ paddingTop: '1rem', margin: '0' }}>
              Ivymind ist Deine Online-Plattform für Achtsamkeit, Selbstliebe und beruflichen
              Erfolg. Finde Deinen passenden Coach oder Kurs, um Deine Herausforderungen für eine
              Neuorientierung zu meistern.
            </p>
          </Container>
        </div>
      )}
    </>
  );
}
