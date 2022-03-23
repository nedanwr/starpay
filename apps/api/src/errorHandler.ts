export const errorHandler = (error: any | unknown) => {
    console.error(error.stack || error);
    process.exit(1);
};
