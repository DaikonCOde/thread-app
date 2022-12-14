const size = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px'
};

export const theme = {
    colors: {
        primary: '#FF8C19',
        secondary: '#00CBAB',
        bg_gradient: 'linear-gradient(91.56deg,#42a7df 1.13%,#1c3553 103.93%)',
        bg_black: '#8AA8B0',
        gray: '#dedede',
        white: '#f5f5f5',
        overlay: 'rgba(33,33,33,0.25)',
        h_primary: '#EE6F05',
        h_secondary: '#009277'
    },
    alerts: {
        error: '#ff0400',
        success: '#37A63E',
        info: '#0477BF',
        warning: '#F2BB16',
        blue: '#3E9DD2'
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
        box: '0px 4px 8px 0px rgb(79 79 79 / 30%)',
        input: '0px 2px 4px 0px rgb(79 79 79 / 20%)',
        input_focus: '0px 4px 8px 5px rgb(255 140 25 / 20%)'
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
