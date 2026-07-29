/* =============================================
   Shared Tailwind Config — Christian Francisco
   ============================================= */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "inverse-primary": "#c6c6c9",
                "surface-container-high": "#e0e9f2",
                "primary-fixed-dim": "#c6c6c9",
                "inverse-on-surface": "#e9f2fb",
                "surface-bright": "#f6faff",
                "on-primary": "#ffffff",
                "error-container": "#ffdad6",
                "surface-dim": "#d2dbe4",
                "primary-container": "#1a1c1e",
                "on-primary-fixed-variant": "#454749",
                "secondary": "#006d35",
                "outline-variant": "#c5c6ca",
                "secondary-container": "#00fa82",
                "surface-tint": "#5d5e61",
                "surface-container-low": "#ecf5fe",
                "surface-container-lowest": "#ffffff",
                "on-tertiary-fixed": "#191c1d",
                "on-background": "#141d23",
                "tertiary-container": "#191c1d",
                "on-tertiary-fixed-variant": "#454748",
                "surface-container": "#e6eff8",
                "on-secondary-container": "#006e36",
                "on-tertiary-container": "#828485",
                "inverse-surface": "#293138",
                "on-secondary-fixed-variant": "#005227",
                "surface": "#f6faff",
                "primary-fixed": "#e2e2e5",
                "on-primary-fixed": "#1a1c1e",
                "tertiary-fixed": "#e1e3e4",
                "on-surface": "#141d23",
                "on-error-container": "#93000a",
                "background": "#f6faff",
                "secondary-fixed": "#61ff97",
                "on-primary-container": "#838486",
                "secondary-fixed-dim": "#00e476",
                "on-tertiary": "#ffffff",
                "error": "#ba1a1a",
                "tertiary-fixed-dim": "#c5c7c8",
                "surface-container-highest": "#dbe4ed",
                "surface-variant": "#dbe4ed",
                "primary": "#000000",
                "on-error": "#ffffff",
                "on-secondary": "#ffffff",
                "on-surface-variant": "#45474a",
                "outline": "#75777a",
                "on-secondary-fixed": "#00210c",
                "tertiary": "#000000"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            spacing: {
                "section-gap": "160px",
                "stack-md": "24px",
                "gutter": "32px",
                "stack-sm": "8px",
                "stack-lg": "48px",
                "margin-mobile": "24px",
                "margin-desktop": "64px",
                "container-max": "1280px"
            },
            fontFamily: {
                "body-lg": ['"Source Serif 4"'],
                "display-mobile": ["Plus Jakarta Sans"],
                "headline-md": ["Plus Jakarta Sans"],
                "label-md": ["Plus Jakarta Sans"],
                "headline-lg-mobile": ["Plus Jakarta Sans"],
                "headline-lg": ["Plus Jakarta Sans"],
                "display": ["Plus Jakarta Sans"],
                "display-xl": ["Anton"],
                "label-mono": ["Geist"],
                "headline-lg": ["Plus Jakarta Sans"],
                "body-md": ['"Source Serif 4"']
            },
            fontSize: {
                "body-lg": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
                "display-mobile": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
                "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
                "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
                "headline-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
                "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
            }
        }
    }
};
