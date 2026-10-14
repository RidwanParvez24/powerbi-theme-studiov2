// Settings for the hosted version. Edit, commit, then refresh the page.
window.APP_CONFIG = {
  gate: false,       // true = visitors get `freeDesigns` free downloads, then must log in. false = downloads are always free
  freeDesigns: 3,    // only used when gate is true
  defaultTheme: "ocean",  // the look people start with: ocean, brand (your red brand), forest, sunset, royal, teal, amber, slate, mono, midnight
  accounts: true,    // true = show the optional "Log in" button so people can save designs to their account
  firebase: {        // Firebase console > Project settings > Your apps > Web app > SDK setup
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  }
};
