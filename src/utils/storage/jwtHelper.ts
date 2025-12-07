import jwtEncode from 'jwt-encode';
import base64 from 'base-64';
import { SECRET_KEY_JWT } from '../../config';

// Tipe payload JWT
export interface JWTPayload {
  email: string;
  exp: number;
}

// Generate JWT dari email
export function generateJWTByEmail(email: string, expireInSec: number = 3600): string {
  const payload: JWTPayload = {
    email,
    exp: Math.floor(Date.now() / 1000) + expireInSec, // default 1 jam
  };
  return jwtEncode(payload, SECRET_KEY_JWT);
}

// Decode JWT (tanpa verify)
export function decodeJWT(token: string): JWTPayload | null {
  try {
    const payload = token.split('.')[1];
    const decoded = base64.decode(payload);
    return JSON.parse(decoded) as JWTPayload;
  } catch (err) {
    console.error('Decode JWT error:', err);
    return null;
  }
}

// Cek apakah token sudah expire
export function isExpired(token: string): boolean {
  const payload = decodeJWT(token);
  if (!payload || !payload.exp) return true;
  const now = Math.floor(Date.now() / 1000);
  return now >= payload.exp;
}
