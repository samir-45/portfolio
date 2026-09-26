import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  let picBase64 = '';
  try {
    const picPath = path.join(process.cwd(), 'public', 'assets', 'mahin-pic.png');
    picBase64 = `data:image/png;base64,${fs.readFileSync(picPath).toString('base64')}`;
  } catch (e) {
    console.error('Error loading mahin-pic.png:', e.message);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#09090b',
          color: '#ffffff',
          padding: '40px 48px',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Top 4px Accent Gradient Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundImage: 'linear-gradient(to right, #6366f1, #4f46e5, #06b6d4)',
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: '#27272a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 2,
                backgroundColor: '#18181b',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#3f3f46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
                color: '#fafafa',
                marginRight: 14,
              }}
            >
              MK
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#f4f4f5' }}>
                mahin.dev
              </div>
              <div style={{ fontSize: 11, color: '#a1a1aa' }}>
                production-engineer // portfolio
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 14px',
              borderRadius: 2,
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(16, 185, 129, 0.3)',
              fontSize: 12,
              color: '#34d399',
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: '#10b981',
                marginRight: 8,
              }}
            />
            <span>AVAILABLE FOR HIRE · 2026</span>
          </div>
        </div>

        {/* Main Content Split: Left Info + Right Developer Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 650,
            }}
          >
            {/* Step Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 12,
                color: '#818cf8',
                letterSpacing: '0.08em',
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  padding: '2px 6px',
                  borderRadius: 2,
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  fontSize: 11,
                  fontWeight: 700,
                  marginRight: 8,
                }}
              >
                01
              </div>
              <span>FULL-STACK ARCHITECTURE &amp; FIGMA FIDELITY</span>
            </div>

            {/* Display Name */}
            <div
              style={{
                fontSize: 54,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Md Mahin Khan
            </div>

            {/* Subtitle / Role */}
            <div
              style={{
                fontSize: 22,
                color: '#38bdf8',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Frontend &amp; Full-Stack Specialist
            </div>

            {/* Statement */}
            <div
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                color: '#d4d4d8',
                marginBottom: 22,
              }}
            >
              Crafting high-conversion web platforms at SM Technology where Figma precision meets clean, production-grade Next.js 15 &amp; Node.js architecture.
            </div>

            {/* Technology Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: 18,
              }}
            >
              {[
                { label: 'React 19 & Next.js 15', color: '#6366f1' },
                { label: '100% Strict TypeScript', color: '#38bdf8' },
                { label: 'Node.js & Express APIs', color: '#10b981' },
                { label: 'Tailwind CSS Systems', color: '#a855f7' },
                { label: 'Stripe & JWT Access', color: '#f59e0b' },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 11px',
                    borderRadius: 2,
                    backgroundColor: '#18181b',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#27272a',
                    fontSize: 11,
                    color: '#e4e4e7',
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 1,
                      backgroundColor: b.color,
                      marginRight: 6,
                    }}
                  />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            {/* Telemetry Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 12,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: '#27272a',
                fontSize: 11,
                color: '#71717a',
              }}
            >
              <span>LOC: DHAKA (UTC+6)</span>
              <span style={{ margin: '0 10px' }}>•</span>
              <span>ROLE: SM TECHNOLOGY</span>
              <span style={{ margin: '0 10px' }}>•</span>
              <span style={{ color: '#818cf8' }}>COMMITS: 500+</span>
            </div>
          </div>

          {/* Right Column: Architectural Developer Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 390,
              borderRadius: 2,
              backgroundColor: '#121214',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#27272a',
              padding: 16,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
                marginBottom: 12,
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: '#27272a',
                fontSize: 11,
                color: '#71717a',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 1,
                    backgroundColor: '#6366f1',
                    marginRight: 6,
                  }}
                />
                <span style={{ color: '#f4f4f5', fontWeight: 600 }}>engineer_identity</span>
              </div>
              <span>sm_tech // verified</span>
            </div>

            {/* Image Container with Scrim */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 200,
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#27272a',
                display: 'flex',
                backgroundColor: '#18181b',
                overflow: 'hidden',
              }}
            >
              {picBase64 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={picBase64}
                  alt="Md Mahin Khan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : null}

              {/* Scrim Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '10px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6) 60%, transparent)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    Md Mahin Khan
                  </span>
                  <span
                    style={{
                      padding: '2px 6px',
                      borderRadius: 2,
                      backgroundColor: '#10b981',
                      color: '#000000',
                      fontSize: 9,
                      fontWeight: 700,
                    }}
                  >
                    VERIFIED
                  </span>
                </div>
                <span style={{ fontSize: 11, color: '#e4e4e7', marginTop: 2 }}>
                  Full-Stack Engineer · SM Tech
                </span>
              </div>
            </div>

            {/* Micro-Telemetry Grid */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
                marginTop: 10,
                marginBottom: 10,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: '#27272a',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: '#27272a',
                fontSize: 10,
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#71717a', fontSize: 9 }}>ORG</span>
                <span style={{ color: '#f4f4f5', fontWeight: 700, fontSize: 11 }}>SM Tech</span>
              </div>
              <div style={{ width: 1, backgroundColor: '#27272a' }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#71717a', fontSize: 9 }}>DELIVERED</span>
                <span style={{ color: '#f4f4f5', fontWeight: 700, fontSize: 11 }}>10+ Projs</span>
              </div>
              <div style={{ width: 1, backgroundColor: '#27272a' }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#71717a', fontSize: 9 }}>COMMITS</span>
                <span style={{ color: '#818cf8', fontWeight: 700, fontSize: 11 }}>500+</span>
              </div>
            </div>

            {/* Commercial Engine Highlight */}
            <div
              style={{
                padding: '8px 10px',
                borderRadius: 2,
                backgroundColor: '#18181b',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#27272a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 11,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#6366f1', fontWeight: 700, marginRight: 6 }}>sys:</span>
                <span style={{ color: '#f4f4f5' }}>irendity-marketplace</span>
              </div>
              <span
                style={{
                  padding: '1px 6px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                +9.4% APR
              </span>
            </div>

            {/* Terminal Command */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 10,
                padding: '6px 10px',
                borderRadius: 2,
                backgroundColor: '#09090b',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#27272a',
                fontSize: 10,
                color: '#a1a1aa',
              }}
            >
              <span style={{ color: '#818cf8', marginRight: 6 }}>$</span>
              <span>git checkout -b hire/mahin-khan</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Watermark + SEO / Verification */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 16,
            borderTopWidth: 1,
            borderTopStyle: 'solid',
            borderTopColor: '#27272a',
            fontSize: 11,
            color: '#71717a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#a1a1aa' }}>mahin-portfolio-site.netlify.app</span>
            <span style={{ margin: '0 8px' }}>•</span>
            <span>Render Aesthetic (2px Radius, Hairline, Electric Indigo)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>UPTIME: 99.9%</span>
            <span style={{ margin: '0 8px' }}>•</span>
            <span style={{ color: '#34d399' }}>OPEN TO WORK</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
