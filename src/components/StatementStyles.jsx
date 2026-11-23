const StatementStyles = () => (
  <style>
    {`
          .cap-page {
            background: #fff;
            color: #363636;
          }

          .App:has(.cap-page) .pagefooter {
            margin-top: 0 !important;
          }

          .App:has(.cap-page) .footer {
            display: block !important;
            height: auto !important;
            min-height: 0 !important;
          }

          .cap-page,
          .cap-page p,
          .cap-page li,
          .cap-page span,
          .cap-page dt,
          .cap-page dd,
          .cap-page h1,
          .cap-page h2,
          .cap-page h3 {
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
          }

          .cap-page p {
            display: block !important;
            background-image: none;
            transition: none;
          }

          .cap-page p::first-letter {
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
          }

          .cap-mast {
            background: #363636;
            color: #fff;
          }

          .cap-wrap {
            width: min(1080px, calc(100% - 2.5rem));
            margin: 0 auto;
          }

          .cap-mast-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            padding: 1.35rem 0 1.15rem;
          }

          .cap-logo {
            height: 72px;
            width: auto;
            filter: brightness(0) invert(1);
            opacity: 0.92;
          }

          .cap-mast-meta {
            text-align: right;
            line-height: 1.35;
          }

          .cap-mast-meta p {
            margin: 0;
            line-height: 1.35;
          }

          .cap-kicker {
            margin: 0;
            color: #2C7F7F;
            font-size: 0.72rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .cap-mast-meta .cap-kicker {
            color: #E8F4F4;
          }

          .cap-site {
            margin: 0.15rem 0 0;
            font-size: 0.95rem;
          }

          .cap-place {
            margin: 0;
            color: #E8F4F4;
            font-size: 0.95rem;
          }

          .cap-headline {
            margin: 0;
            padding: 1.7rem 0 1.15rem;
            color: #363636;
            font-weight: 700 !important;
            font-size: clamp(1.85rem, 3.4vw, 2.7rem) !important;
            line-height: 1.18;
            letter-spacing: -0.015em;
          }

          .cap-headline em {
            font-style: normal !important;
            font-weight: 700 !important;
            color: #2C7F7F;
            background: none;
            padding: 0;
          }

          .cap-break {
            display: inline;
          }

          @media (min-width: 801px) {
            .cap-break {
              display: block;
            }
          }

          .cap-rule {
            height: 7px;
            background: #2C7F7F;
          }

          .cap-body {
            padding: 1.35rem 0 2.4rem;
          }

          .cap-lead {
            margin: 0 0 1.6rem;
            padding: 1.05rem 1.2rem;
            background: #E8F4F4;
            border: 1px solid #2C7F7F;
            border-radius: 8px;
            font-size: 1.02rem !important;
            line-height: 1.55;
          }

          .cap-lead strong {
            font-weight: 700 !important;
          }

          .cap-label {
            margin: 0 0 0.85rem;
          }

          .cap-services {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.85rem;
            margin-bottom: 1.7rem;
          }

          .cap-card {
            background: #fff;
            border: 1px solid #2C7F7F;
            border-radius: 8px;
            padding: 0.95rem 1.05rem 1.05rem;
          }

          .cap-num {
            margin: 0 0 0.2rem;
            color: #2C7F7F;
            font-size: 0.78rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.04em;
          }

          .cap-card h2,
          .cap-step h3 {
            margin: 0 0 0.35rem;
            color: #363636;
            font-size: 1.12rem;
            font-weight: 700 !important;
            line-height: 1.3;
          }

          .cap-card p,
          .cap-step p {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.45;
            color: #363636;
          }

          .cap-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.7rem;
            margin-bottom: 1.7rem;
          }

          .cap-step {
            background: #E8F4F4;
            border: 1px solid #2C7F7F;
            border-radius: 8px;
            padding: 0.8rem 0.8rem 0.9rem;
          }

          .cap-step .cap-num {
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-size: 0.68rem !important;
          }

          .cap-split {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 2rem;
            align-items: start;
          }

          .cap-audience {
            display: grid;
            grid-template-columns: 9.2rem 1fr;
            gap: 0.35rem 0.75rem;
            align-items: baseline;
            padding: 0.62rem 0;
            border-bottom: 1px solid #E8F4F4;
            margin: 0;
          }

          .cap-audience dt {
            font-weight: 700 !important;
          }

          .cap-audience dd {
            margin: 0;
          }

          .cap-audience dd::before {
            content: '▸ ';
            color: #2C7F7F;
            font-weight: 700;
          }

          .cap-methods {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.4rem;
          }

          .cap-pill {
            display: block;
            padding: 0.32rem 0.55rem;
            border: 1px solid #2C7F7F;
            border-radius: 8px;
            background: #E8F4F4;
            color: #245F5F;
            font-size: 0.82rem !important;
            line-height: 1.3;
            text-align: center;
          }

          .cap-pill.is-featured {
            background: #2C7F7F;
            border-color: #2C7F7F;
            color: #fff;
            font-weight: 700 !important;
          }

          .cap-evidence {
            margin-top: 1.15rem;
          }

          .cap-evidence p {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .cap-trust {
            background: #363636;
            color: #fff;
            text-align: center;
            padding: 1.15rem 0 1.25rem;
          }

          .cap-trust .cap-kicker {
            color: #E8F4F4;
            margin-bottom: 0.85rem;
          }

          .cap-partners {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.35rem 0;
            margin: 0 !important;
            padding: 0 !important;
            list-style: none;
            border: none !important;
            text-align: center;
          }

          .cap-partners li {
            padding: 0 0.95rem;
            font-size: 1.55rem;
            font-weight: 700 !important;
            letter-spacing: 0.04em;
            line-height: 1.2;
          }

          .cap-partners li + li {
            border-left: 1px solid rgba(255, 255, 255, 0.35);
          }

          .cap-signoff {
            background: #2C7F7F;
            color: #fff;
          }

          .cap-signoff-row {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            align-items: center;
            padding: 0.55rem 0;
            font-size: 0.82rem !important;
            letter-spacing: 0.04em;
          }

          .cap-signoff-row span:nth-child(2) {
            letter-spacing: 0.14em;
            text-transform: uppercase;
            font-weight: 700 !important;
          }

          @media (max-width: 900px) {
            .cap-services,
            .cap-steps,
            .cap-split {
              grid-template-columns: 1fr;
            }

            .cap-mast-inner,
            .cap-signoff-row {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              gap: 0.25rem;
            }

            .cap-mast-meta {
              text-align: left;
            }

            .cap-partners li {
              font-size: 1.2rem;
              padding: 0.2rem 0.7rem;
            }
          }

          @media (max-width: 768px) {
            .cap-audience {
              grid-template-columns: 1fr;
              gap: 0.1rem;
            }
          }
    `}
  </style>
);

export default StatementStyles;
