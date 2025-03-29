
// Initialize dataLayer array if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Basic gtag function
function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
}

// Track page views
export const pageView = (page_path: string, page_title: string) => {
  gtag('event', 'page_view', {
    page_path,
    page_title,
    send_to: 'G-MEASUREMENT_ID'
  });
};

// Track custom events
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  gtag('event', eventName, eventParams);
};

// Track user interactions (clicks, form submissions, etc.)
export const trackInteraction = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number
) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
