import QRCode from "qrcode";

export async function generateUPIQRCode(upiDataUrl: string): Promise<string> {
  try {
    return await QRCode.toDataURL(upiDataUrl, {
      width: 260,
      margin: 1.5,
      color: {
        dark: "#04101c",
        light: "#ffffff",
      },
      errorCorrectionLevel: "M",
    });
  } catch (err) {
    console.error("QR Code Generation Error:", err);
    return "";
  }
}
