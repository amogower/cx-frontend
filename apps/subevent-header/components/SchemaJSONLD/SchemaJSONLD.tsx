import { JsonLd } from 'react-schemaorg';
import { SportsEvent } from 'schema-dts';

export type BookieHeaderSchemaProps = {
  eventName: string;
  subeventEnd: string;
  subeventName: string;
  subeventStart: string;
  subeventUrl: string;
};

export const SchemaJSONLD = ({
  eventName,
  subeventEnd,
  subeventName,
  subeventStart,
  subeventUrl,
}: BookieHeaderSchemaProps): JSX.Element => (
  <JsonLd<SportsEvent>
    item={{
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: subeventName,
      startDate: subeventStart,
      endDate: subeventEnd,
      url: `https://www.oddschecker.com/${subeventUrl}`,
      location: {
        '@type': 'Place',
        name: eventName,
        address: {
          '@type': 'PostalAddress',
          name: '',
        },
      },
    }}
  />
);
