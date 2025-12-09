
export const logError = async (message: string, error: any) => {
    console.error(message);

    if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
    } else {
        console.error(error);
    }
};
