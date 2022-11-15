const size = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px'
};

export const theme = {
    colors: {
        primary: '#FF8C19',
        secondary: '#8AA8B0',
        white: '#dedede',
        overlay: 'rgba(33,33,33,0.25)',
        h_primary: '#EE6F05'
    },
    alerts: {
        error: '#FF5752',
        success: '#37A63E',
        info: '#0477BF',
        warning: '#F2BB16'
    },
    c_text: {
        principal: '#313732',
        gray: '#858585',
        ligth: '#d1d1d1',
        white: '#ffffff',
        disabled: '#85858530'
    },
    rounded: {
        s: '5px',
        m: '10px',
        l: '16px',
        50: '50%'
    },
    shadow: {
        box: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
        nav: '0px -3px 8px 0px rgba(0, 0, 0, 0.05)'
    },
    padding: {
        input: '9px 15px',
        button: '12px 20px',
        modal: '30px'
    },
    transition: {
        default: 'all .3s linear'
    },

    breakpoints: {
        mobileM: `(min-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`
    }
};
