'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${gaId}');
            
            // Enhanced tracking for ZeroFiscus
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Tax Advisory',
              content_group2: 'Dutch Market',
              send_page_view: true
            });

            // Track assessment form submissions
            function trackAssessment(step, userType) {
              gtag('event', 'assessment_step', {
                event_category: 'Lead Generation',
                event_label: step,
                user_type: userType,
                value: 1
              });
            }

            // Track lead submissions
            function trackLeadSubmission(userType) {
              gtag('event', 'lead_submission', {
                event_category: 'Conversion',
                event_label: userType,
                value: 1
              });
            }

            // Track scroll depth for SEO insights
            let scrollDepths = [25, 50, 75, 100];
            let scrolled = [];
            
            window.addEventListener('scroll', function() {
              scrollDepths.forEach(function(depth) {
                if (!scrolled.includes(depth) && window.scrollY >= (document.body.scrollHeight - window.innerHeight) * (depth / 100)) {
                  scrolled.push(depth);
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: depth + '%',
                    value: depth
                  });
                }
              });
            });

            // Make tracking functions globally available
            window.trackAssessment = trackAssessment;
            window.trackLeadSubmission = trackLeadSubmission;
          `
        }}
      />
    </>
  )
}

// Search Console verification component
export function SearchConsoleVerification() {
  return (
    <meta 
      name="google-site-verification" 
      content="your-google-search-console-verification-code" 
    />
  )
}

// Microsoft Clarity Analytics (additional insights)
interface MicrosoftClarityProps {
  clarityId: string
}

export function MicrosoftClarity({ clarityId }: MicrosoftClarityProps) {
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
          
          // Custom Clarity tracking for ZeroFiscus
          clarity('set', 'user_type', 'tax_client');
          clarity('set', 'market', 'netherlands');
          clarity('set', 'product', 'tax_advisory');
        `
      }}
    />
  )
}

// Cookie Consent Banner (GDPR Compliance)
export function CookieConsent() {
  return (
    <div id="cookie-consent" style={{ display: 'none' }}>
      <Script
        id="cookie-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Simple GDPR-compliant cookie consent
            if (!localStorage.getItem('zerofiscus-cookie-consent')) {
              const banner = document.getElementById('cookie-consent');
              banner.style.display = 'block';
              banner.innerHTML = \`
                <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1f2937; color: white; padding: 1rem; z-index: 1000; box-shadow: 0 -2px 10px rgba(0,0,0,0.1);">
                  <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: between; gap: 1rem;">
                    <div style="flex: 1;">
                      <p style="margin: 0; font-size: 0.9rem;">
                        Wij gebruiken cookies om uw ervaring te verbeteren en om inzicht te krijgen in hoe onze website wordt gebruikt. 
                        Door verder te gaan, gaat u akkoord met ons <a href="#" style="color: #60a5fa; text-decoration: underline;">cookiebeleid</a>.
                      </p>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                      <button onclick="acceptCookies()" style="background: #059669; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; font-size: 0.9rem;">
                        Accepteren
                      </button>
                      <button onclick="declineCookies()" style="background: #6b7280; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; font-size: 0.9rem;">
                        Weigeren
                      </button>
                    </div>
                  </div>
                </div>
              \`;
            }

            function acceptCookies() {
              localStorage.setItem('zerofiscus-cookie-consent', 'accepted');
              document.getElementById('cookie-consent').style.display = 'none';

              // Enable analytics only after consent
              if (window.gtag) {
                gtag('consent', 'update', {
                  analytics_storage: 'granted',
                  ad_storage: 'granted'
                });
              }
            }

            function declineCookies() {
              localStorage.setItem('zerofiscus-cookie-consent', 'declined');
              document.getElementById('cookie-consent').style.display = 'none';

              // Disable analytics
              if (window.gtag) {
                gtag('consent', 'update', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied'
                });
              }
            }

            // Check if user already consented
            if (localStorage.getItem('zerofiscus-cookie-consent') === 'accepted' && window.gtag) {
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'granted'
              });
            }
          `
        }}
      />
    </div>
  )
}