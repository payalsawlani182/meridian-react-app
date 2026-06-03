import { useState } from "react";
import Reveal from "./Reveal";

const STEPS = ['Enquiry Type', 'Your Details', 'Confirm'];
const ENQUIRY_TYPES = ['M&A Advisory', 'Capital Raising', 'Restructuring', 'Strategic Research', 'Family Office', 'Other'];

const OFFICES = [
  { city: 'London', addr: '1 Bishopsgate, EC2N 4AY', tel: '+44 20 7890 4200' },
  { city: 'Dubai', addr: 'DIFC, Gate Village 10, Level 8', tel: '+971 4 501 3300' },
  { city: 'New York', addr: '745 Fifth Avenue, 20th Floor', tel: '+1 212 440 8800' },
  { city: 'Singapore', addr: 'One Raffles Quay, North Tower', tel: '+65 6823 1100' },
];

function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ type: '', name: '', email: '', company: '', country: '', message: '' });
  const [done, setDone] = useState(false);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'var(--ink)', borderTop: '1px solid var(--border)' }}>
      <div style={{ padding: '0 48px', marginBottom: 80 }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>07 — Contact</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: 'var(--mist)', lineHeight: 1.1 }}>
            Initiate a<br /><em>Confidential Dialogue</em>
          </h2>
        </Reveal>
      </div>

      <div style={{ padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          {!done ? (
            <>
              {/* Step indicator */}
              <div style={{ display: 'flex', gap: 0, marginBottom: 48 }}>
                {STEPS.map((s, i) => (
                  <div key={i} style={{ flex: 1, position: 'relative' }}>
                    <div style={{
                      height: 2, background: i <= step ? 'var(--gold)' : 'var(--border)',
                      transition: 'background 0.4s'
                    }} />
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 9, marginTop: 8, letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: i === step ? 'var(--gold)' : i < step ? 'rgba(201,168,76,0.4)' : 'rgba(244,240,232,0.2)'
                    }}>{s}</div>
                  </div>
                ))}
              </div>

              {/* Step 0 */}
              {step === 0 && (
                <div style={{ animation: 'fadeSlide 0.3s var(--ease)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: 'rgba(244,240,232,0.5)', marginBottom: 28 }}>Select the nature of your enquiry</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {ENQUIRY_TYPES.map(t => (
                      <button key={t} onClick={() => { set('type', t); setTimeout(() => setStep(1), 200); }} data-hover
                        style={{
                          cursor: 'none', padding: '14px 20px', textAlign: 'left',
                          background: data.type === t ? 'var(--gold-dim)' : 'transparent',
                          border: `1px solid ${data.type === t ? 'var(--gold)' : 'var(--border)'}`,
                          color: data.type === t ? 'var(--gold)' : 'rgba(244,240,232,0.5)',
                          fontFamily: 'var(--sans)', fontSize: 13, transition: 'all 0.25s'
                        }}>{t}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <div style={{ animation: 'fadeSlide 0.3s var(--ease)' }}>
                  {[['name', 'Full Name'], ['email', 'Email Address'], ['company', 'Organisation'], ['country', 'Country'], ['message', 'Brief Overview']].map(([k, label]) => (
                    <div key={k} style={{ marginBottom: 20 }}>
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,240,232,0.4)', display: 'block', marginBottom: 8 }}>{label}</label>
                      {k === 'message' ? (
                        <textarea value={data[k]} onChange={e => set(k, e.target.value)} rows={3} style={{
                          width: '100%', background: 'var(--smoke)', border: '1px solid var(--border)', color: 'var(--mist)',
                          fontFamily: 'var(--serif)', fontSize: 15, padding: '12px 16px', resize: 'vertical',
                          outline: 'none', transition: 'border-color 0.2s'
                        }} />
                      ) : (
                        <input value={data[k]} onChange={e => set(k, e.target.value)} style={{
                          width: '100%', background: 'var(--smoke)', border: '1px solid var(--border)', color: 'var(--mist)',
                          fontFamily: 'var(--serif)', fontSize: 15, padding: '12px 16px',
                          outline: 'none', transition: 'border-color 0.2s'
                        }} />
                      )}
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                    <button onClick={() => setStep(0)} data-hover style={{ cursor: 'none', padding: '12px 24px', background: 'transparent', border: '1px solid var(--border)', color: 'rgba(244,240,232,0.4)', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.08em' }}>← Back</button>
                    <button onClick={() => setStep(2)} data-hover style={{ cursor: 'none', padding: '12px 32px', background: 'var(--gold)', border: 'none', color: 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Review →</button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div style={{ animation: 'fadeSlide 0.3s var(--ease)' }}>
                  <div style={{ background: 'var(--smoke)', border: '1px solid var(--border)', padding: 28, marginBottom: 28 }}>
                    {[['Enquiry Type', data.type], ['Name', data.name], ['Email', data.email], ['Company', data.company], ['Country', data.country]].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border2)' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(244,240,232,0.4)', textTransform: 'uppercase' }}>{k}</span>
                        <span style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--mist)' }}>{v || '—'}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(244,240,232,0.3)', marginBottom: 24, lineHeight: 1.7 }}>
                    Your enquiry will be reviewed by a senior associate within one business day and routed to the appropriate regional team.
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={() => setStep(1)} data-hover style={{ cursor: 'none', padding: '12px 24px', background: 'transparent', border: '1px solid var(--border)', color: 'rgba(244,240,232,0.4)', fontFamily: 'var(--sans)', fontSize: 12 }}>← Edit</button>
                    <button onClick={() => setDone(true)} data-hover style={{ cursor: 'none', padding: '12px 40px', background: 'var(--gold)', border: 'none', color: 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Submit Enquiry</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{ animation: 'fadeSlide 0.5s var(--ease)', textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', border: '2px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, color: 'var(--gold)', margin: '0 auto 24px', animation: 'pulse 1.5s ease-in-out infinite'
              }}>✓</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 300, color: 'var(--mist)', marginBottom: 12 }}>Enquiry Received</h3>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'rgba(244,240,232,0.4)', lineHeight: 1.7 }}>A senior associate will be in touch within one business day.</p>
            </div>
          )}
        </div>

        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'rgba(244,240,232,0.3)', textTransform: 'uppercase', marginBottom: 24 }}>Principal Offices</div>
          {OFFICES.map((o, i) => (
            <div key={i} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--border2)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--gold)', marginBottom: 4 }}>{o.city}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(244,240,232,0.4)', marginBottom: 2 }}>{o.addr}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(244,240,232,0.3)' }}>{o.tel}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}

export default Contact;
