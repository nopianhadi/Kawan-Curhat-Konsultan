import React from 'react';

export const Logo: React.FC = () => (
  <svg width="107" height="24" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.6373 23.5V0.5H19.4373V13.31L10.3773 0.5H5.87734L15.1173 13.37L15.0573 13.43L5.27734 23.5H9.77734L17.4573 14.15V23.5H23.6373Z" fill="#1C2024"/>
    <path d="M0.75 12C0.75 5.78 5.78 0.75 12 0.75C18.22 0.75 23.25 5.78 23.25 12C23.25 18.22 18.22 23.25 12 23.25C5.78 23.25 0.75 18.22 0.75 12Z" stroke="#1C2024" strokeWidth="1.5"/>
    <path d="M41.4429 0.5V23.5H37.2429V0.5H41.4429Z" fill="#1C2024"/>
    <path d="M57.6979 17.51C59.3179 17.51 60.5779 16.52 60.5779 14.78V12.11C60.5779 9.05 58.1179 7.61 54.3379 7.61H50.5579V23.5H54.7579V17.51H57.6979ZM54.7579 14.21V10.91H55.4779C56.6779 10.91 57.0379 11.45 57.0379 12.65V12.71C57.0379 13.91 56.6779 14.21 55.4779 14.21H54.7579Z" fill="#1C2024"/>
    <path d="M78.021 23.5V0.5H73.821V14.15L66.141 0.5H61.641L70.881 13.43L61.041 23.5H65.541L71.841 15.89L73.821 17.69V23.5H78.021Z" fill="#1C2024"/>
    <path d="M91.0766 23.5V0.5H106.017V4.7H95.2766V10.19H104.937V14.39H95.2766V19.34H106.317V23.5H91.0766Z" fill="#1C2024"/>
  </svg>
);

export const AwardIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1ZM8.71 12.29L6.5 10.08L4.29 12.29L3.58 11.58L5.79 9.37L3.58 7.16L4.29 6.45L6.5 8.66L8.71 6.45L9.42 7.16L7.21 9.37L9.42 11.58L8.71 12.29ZM12.42 10.16L11.71 9.45L10.5 10.66L11.21 11.37L12.42 10.16ZM11.21 4.37L10.5 5.08L11.71 6.29L12.42 5.58L11.21 4.37Z" fill="#E59560"/>
    </svg>
);

export const PlusIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="#1C2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H19" stroke="#1C2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MinusIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#1C2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Partner Logos
export const PartnerLogo1: React.FC = () => (
    <p className="font-bold text-gray-400">LOGO</p>
);
export const PartnerLogo2: React.FC = () => (
    <div className="flex items-center font-bold text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
        <span>Acme Corp</span>
    </div>
);
export const PartnerLogo3: React.FC = () => (
    <p className="font-bold text-gray-400">LOGO IPSUM</p>
);
export const PartnerLogo4: React.FC = () => (
    <p className="font-bold text-gray-400 italic">L O G O</p>
);
export const PartnerLogo5: React.FC = () => (
    <div className="flex items-center font-bold text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
        <span>ipsum</span>
    </div>
);
export const PartnerLogo6: React.FC = () => (
    <p className="font-bold text-gray-400 tracking-widest">IPSUM</p>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const XIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.817-6.022 6.817h-3.308l7.732-8.734-8.21-10.766h6.838l4.572 6.023 5.46-6.023zm-1.148 18.28h1.78l-9.9-13.08h-1.88l9.9 13.08z"/>
    </svg>
);
