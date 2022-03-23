export const port: string | number = process.env.PORT || 5500;
export const __prod__: boolean = process.env.NODE_ENV === "production";
export const env = process.env.NODE_ENV || "development";
export const apiVersion = process.env.API_VERSION || "v1";
