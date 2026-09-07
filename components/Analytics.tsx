import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${measurementId}');document.addEventListener('click',function(event){var link=event.target.closest('[data-analytics-event]');if(!link||!window.gtag)return;window.gtag('event',link.dataset.analyticsEvent,{event_category:'engagement',product_name:link.dataset.productName||undefined,placement:link.dataset.placement||undefined});});`}
      </Script>
    </>
  );
}
