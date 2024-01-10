import { Dimensions } from 'react-native';
import { TextInput as PaperTextInput, configureFonts } from 'react-native-paper';
const { width, height } = Dimensions.get('window');
const theme = {
    palette: {
        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        BACKGROUND_LIGHT_BLACK: '#2e2f2f',
        BACKGROUND_GREEN: '#00E556',
        WHITE: '#FFF',
        HEADER_TEXT_DARK_GREEN: '#35533E',
        DESCRIPTION_TEXT_GREY: '#909090',
        PLACEHOLDER_GREY: '#6faf89',
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: '#707070',
        LIGHT_GREY: '#f4f4f4',
        LIGHT_GREY2: '#DCDCDC',
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED: '#FF0000',
        NEON_GREEN: '#00e556',
        BACKGROUND_GREY: '#2e2f2f',
        GREY: '#434444',
        buttonColor: '#605b5b',
        LIGHT_BLACK: '#2e2f2f',
        BLACK_SHADE: '#434343',

        GREY: '#434444',
        buttonColor: '#605b5b',
        LIGHT_BLACK: '#2e2f2f',
        BLACK_SHADE: '#434343',
    },


};
const fontConfig = {
    ios: {
        regular: {
            fontFamily: 'StagSans-Light',
            fontWeight: 'normal',
        },
        // medium: {
        //     fontFamily: 'sans-serif-medium',
        //     fontWeight: 'normal',
        // },
        // light: {
        //     fontFamily: 'sans-serif-light',
        //     fontWeight: 'normal',
        // },
        // thin: {
        //     fontFamily: 'sans-serif-thin',
        //     fontWeight: 'normal',
        // },
    },
    android: {
        regular: {
            fontFamily: 'StagSans-Light',
            fontWeight: 'normal',
        },
        // medium: {
        //     fontFamily: 'StagSans-Medium',
        //     fontWeight: 'normal',
        // },
        // light: {
        //     fontFamily: 'StagSans-Light',
        //     fontWeight: 'normal',
        // },
        // thin: {
        //     fontFamily: 'StagSans-Thin',
        //     fontWeight: 'normal',
        // },
    },
};

export const textInputGreyBorder = {
    roundness: 8,
    colors: {
        primary: theme.palette.BACKGROUND_GREEN,
        text: theme.palette.BACKGROUND_GREEN,
        background: theme.palette.WHITE,
        placeholder: theme.palette.TEXT_GREY,
    },
    fonts: configureFonts(fontConfig),
};
export const textInputWhiteBorder = {
    roundness: 8,
    colors: {
        primary: theme.palette.WHITE,
        text: theme.palette.WHITE,
        background: theme.palette.BLACK,
        placeholder: theme.palette.WHITE,
    },
    fonts: configureFonts(fontConfig),
};

export const darkTheme = {
    dark: true,

    colors: {
        ussdCard: '#2e2f2f',
        errorMessage: '#ffffff',
        eye: '#2E2F2F',
        eyeimagebackground: '#F2F2F2',
        image: '#2E2F2F',
        imagebackground: '#F2F2F2',
        background: '#171717',
        lightGreen: '#00E556',
        DarkGreen: '#007E2F',
        text: '#FFFFFF',
        textCard: '#FFFFFF',
        // primary: "#171717",
        greyCard: '#2E2F2F',
        // SplashCard: "#2e2f2f",

        loginTextInput: '#707070',
        titleText: '#ffffff',
        PrevButton: '#00e556',
        InputBorder: '#ffffff',
        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        // BACKGROUND_LIGHT_BLACK: "#2e2f2f",
        BACKGROUND_GREEN: '#00E556',
        WHITE: '#FFF',
        HEADER_TEXT_DARK_GREEN: '#35533E',
        DESCRIPTION_TEXT_GREY: '#909090',
        PLACEHOLDER_GREY: '#6faf89',
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: '#707070',
        LIGHT_GREY: '#f4f4f4',
        LIGHT_GREY2: '#DCDCDC',
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        // PRIMARY: "#1C843B",
        // SECONDRY: "#FFC600",
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED: '#FF0000',
        NEON_GREEN: '#00E556',
        // BACKGROUND_GREY: "#2e2f2f",
        GREY: '#434444',
        buttonColor: '#605b5b',
        // LIGHT_BLACK: "#2e2f2f",
        BLACK_SHADE: '#434343',

        myCards: '#2e2f2f',
        payBills: '#2e2f2f',
        topUp: '#2e2f2f',
        transactionHistory: '#2e2f2f',
        greenBillCards: '#4e965f',
        accCardBg: '#2e2f2f',
        borderTextInput: '#F4F4F4',
        serviceStoreManage: '#00E556',
        ussdCodeManage: '#00E556',
        cancelBtn: '#F2F2F2',
        textGrey: '#2E2F2F',
        background: '#171717',
        // lightGreen: "#00E556",
        // DarkGreen: "#007E2F",
        // text: "#FFFFFF",
        // primary: "#171717",
        splashCard: '#2e2f2f',
        SplashCard: '#2e2f2f',
        // SplashCard:"#FFFFFF",
        NEON_GREEN: '#00e556',
        PopUpColor: '#171717',
        PopUpBackground: '#000000AA',
        CardColor: '#2E2F2F',
        LighterCards: '#434343',
        SecondaryButton: '#F2F2F2',
        BlackText: '#171717',
        whiteText: '#FFFFFF',
        TextBoxOutline: '#FFFFFF',
        selectCategory: '#888b8a',
        TransactionText: '#576EFF',
        contactCards: '#00E556',
        loginTextInput: '#707070',
        titleText: '#ffffff',
        // PrevButton:"#1C843B",
        LoginButton: '#4D4848',
        InputBorder: '#ffffff',

        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        BACKGROUND_LIGHT_BLACK: '#2e2f2f',
        BACKGROUND_GREEN: '#00E556',
        WHITE: '#FFF',
        HEADER_TEXT_DARK_GREEN: '#35533E',
        DESCRIPTION_TEXT_GREY: '#909090',
        PLACEHOLDER_GREY: '#6faf89',
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: '#707070',
        LIGHT_GREY: '#f4f4f4',
        LIGHT_GREY2: '#DCDCDC',
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED: '#FF0000',
        NEON_GREEN: '#00e556',
        BACKGROUND_GREY: '#2e2f2f',
        GREY: '#434444',
        buttonColor: '#605b5b',
        LIGHT_BLACK: '#2e2f2f',
        BLACK_SHADE: '#434343',
        signOut: '#FF7771',
        addNewAccBtn: '#FFFFFF',
        addNewAccText: '#2E2F2F',
        textInputPlaceholder: "#FFFFFF",
        alertBackground:"#2e2f2f",
        toolTipBackground: '#4E5454',
        shimmerBackground:"#5A524F",
        shimmerHighlight:"#7C7471" ,
    },
};

export const lightTheme = {
    dark: false,
    colors: {
        errorMessage: '#900D09',
        eye: '#4E965F',
        eyeimagebackground: '#ECF4EE',
        imagebackground: '#4e965f',
        image: '#FFFFFF',
        background: '#F4F4F4',
        lightGreen: '#00E556',
        DarkGreen: '#007E2F',
        // text: "#989898",
        // text: '#4D4848',
        text: '#6e6e6e',
        textCard: '#4D4848',
        // primary: "#F4F4F4",
        splashCard: '#FFFFFF',
        loginTextInput: '#fbfbfb',
        titleText: '#4D4848',
        greyCard: '#2e2f2f',
        card: '#FFFFFF',
        outline: '#7CFC00',
        SignOut: '#BF0060',
        // card2:"#FFF",
        PrevButton: '#4D4848',
        InputBorder: '#1C843B',
        PRIMARY: '#1C843B',
        // titleText: "#000",
        selectCategory: '#989898',
        greyCard: '#2E2F2F',
        ussdCard: '#FFFFFF',
        outline: '#7CFC00',
        SignOut: '#BF0060',
        // card2:"#FFF",
        // PrevButton: "#000",
        // InputBorder: "#1C843B",
        // PRIMARY: "#1C843B",
        SECONDRY: '#FFC600',
        // BACKGROUND_LIGHT_BLACK: "#2e2f2f",
        BACKGROUND_GREEN: '#00E556',
        WHITE: '#FFF',
        HEADER_TEXT_DARK_GREEN: '#35533E',
        DESCRIPTION_TEXT_GREY: '#909090',
        PLACEHOLDER_GREY: '#6faf89',
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: '#707070',
        LIGHT_GREY: '#f4f4f4',
        LIGHT_GREY2: '#DCDCDC',
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        // PRIMARY: "#1C843B",
        // SECONDRY: "#FFC600",
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED: '#FF0000',
        NEON_GREEN: '#00E556',
        // BACKGROUND_GREY: "#2e2f2f",
        GREY: '#434444',
        buttonColor: '#605b5b',
        // LIGHT_BLACK: "#2e2f2f",
        BLACK_SHADE: '#434343',

        myCards: '#FEFCE8',
        payBills: '#EDE7F1',
        topUp: '#FCEDE6',
        transactionHistory: '#ECF6EA',
        greenBillCards: '#F4F4F4',
        accCardBg: '#FFFFFF',
        borderTextInput: '#4E965F',
        // lightGreen: "#00E556",
        //    DarkGreen:"#007E2F",
        LoginButton: '#4D4848',
        //   primary: "#F4F4F4",
        splashCard: '#FFFFFF',
        loginTextInput: '#fbfbfb',
        titleText: '#4D4848',
        selectCategory: '#989898',
        SplashCard: '#2e2f2f',
        //   PrevButton:"#000",
        InputBorder: '#1C843B',

        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        BACKGROUND_LIGHT_BLACK: '#2e2f2f',
        BACKGROUND_GREEN: '#00E556',
        WHITE: '#FFF',
        HEADER_TEXT_DARK_GREEN: '#35533E',
        DESCRIPTION_TEXT_GREY: '#909090',
        PLACEHOLDER_GREY: '#6faf89',
        TEXT_INPUT_BACKGROUND: '#F2F2F2',
        HOME_BACKGROUND_GREY: '#F6F6F6',
        WALLET_BALANCE_DARK_GREY: '#4f5676',
        DARK_GREY: '#707070',
        LIGHT_GREY: '#f4f4f4',
        LIGHT_GREY2: '#DCDCDC',
        BACKGROUND_GREY: '#f0f0f0',
        TEXT_GREY: '#6e6e6e',
        PRIMARY: '#1C843B',
        SECONDRY: '#FFC600',
        PINK: '#ff6a71',
        LIGHT_GREEN: '#0cad80',
        BLACK: '#000',
        DARK_GREY_TEXT: '#5f5f5f',
        CARD_LIGHT_GREEN: '#d5f3da',
        RED: '#FF0000',
        NEON_GREEN: '#00e556',
        BACKGROUND_GREY: '#2e2f2f',
        GREY: '#434444',
        buttonColor: '#605b5b',
        LIGHT_BLACK: '#2e2f2f',
        BLACK_SHADE: '#434343',
        SplashCard: '#2e2f2f',
        NEON_GREEN: '#00e556',
        PopUpColor: '#F4F4F4',
        // PopUpBackground:"#868686",
        PopUpBackground: '#000000AA',
        CardColor: '#FFFFFF',
        SecondaryButton: '#F2F2F2',
        BlackText: '#171717',
        whiteText: '#FFFFFF',
        LighterCards: '#F4F4F4',
        TextBoxOutline: '#1C843B',
        TransactionText: '#5369f1',
        contactCards: '#F4F4F4',
        PrevButton: '#000',
        InputBorder: '#1C843B',
        BLACK_SHADE: '#434343',
        serviceStoreManage: '#632F89',
        ussdCodeManage: '#5cb24c',
        cancelBtn: '#F2F2F2',
        textGrey: '#FFFFFF',
        signOut: '#FF7771',
        addNewAccBtn: '#18b447',
        addNewAccText: '#FFFFFF',
        textInputPlaceholder: "#989898",
        alertBackground:"#E4E4E4",
        toolTipBackground: '#E4E4E4',
        shimmerBackground:"#E1E9EE",
        shimmerHighlight:"#F2F8FC" ,
    },
};

export default theme;

// My Cards: #FCFEFF
// Pay Bills: #F4FFF9
// Top Up: #FFF7F2
// Transaction History: #ECE6FF
// Gradient: #7AD691 - #51C068
