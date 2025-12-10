async function blobToBase64(blob: Blob): Promise<string> {
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return `data:${blob.type};base64,${buffer.toString("base64")}`;
}
export { blobToBase64 };
