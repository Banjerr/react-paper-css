// this can't be .ts file
// https://github.com/parcel-bundler/parcel/issues/1736

import fs from "fs";

export const Button = fs.readFileSync(
  `${__dirname}/Button/Button.example.tsx`,
  "utf-8"
);

export const PaperInput = fs.readFileSync(
  `${__dirname}/PaperInput/PaperInput.example.tsx`,
  "utf-8"
);

export const PaperTypography = fs.readFileSync(
  `${__dirname}/PaperTypography/PaperTypography.example.tsx`,
  "utf-8"
);

export const Heading = fs.readFileSync(
  `${__dirname}/Heading/Heading.example.tsx`,
  "utf-8"
);

export const Badge = fs.readFileSync(
  `${__dirname}/Badge/Badge.example.tsx`,
  "utf-8"
);
