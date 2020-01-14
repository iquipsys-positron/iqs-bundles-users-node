let UsersBundleProcess = require('../obj/src/container/UsersBundleProcess').UsersBundleProcess;

try {
    new UsersBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}