import { NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

// Initialize Firebase Admin SDK if not already initialized
// This ensures it only initializes once in a Next.js environment
let db;
if (!getApps().length) {
  try {
    // Check for required environment variables for Firebase Admin SDK
    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error('Missing Firebase Admin SDK environment variables.');
    }

    // Firebase Admin SDK credentials from environment variables
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/
/g, '
'), // Handle private key with escaped newlines
    };

    initializeApp({
      credential: cert(serviceAccount),
    });
    db = getFirestore();
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Firebase Admin SDK:", error);
    // In a production environment, you might want to throw or handle this more gracefully
    // but for an API route, throwing makes the route fail clearly.
    throw new Error('Firebase Admin SDK initialization failed: ' + error.message);
  }
} else {
  db = getFirestore();
}

export async function POST(req) {
  try {
    const { name, whatItDoes, targetUsers, pricing, contact } = await req.json();

    // Input validation
    if (!name || !whatItDoes || !targetUsers || !pricing || !contact) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Sanitize inputs (basic example, more robust sanitization might be needed depending on use case)
    // Limiting length and trimming whitespace
    const sanitizedData = {
      name: String(name).trim().substring(0, 200),
      whatItDoes: String(whatItDoes).trim().substring(0, 1000),
      targetUsers: String(targetUsers).trim().substring(0, 1000),
      pricing: String(pricing).trim().substring(0, 500),
      contact: String(contact).trim().substring(0, 500),
      createdAt: new Date(),
    };

    // Generate a unique ID for the site
    const siteId = uuidv4();

    // Store data in Firestore
    await db.collection('creatorSites').doc(siteId).set(sanitizedData);

    // Construct the unique URL for the new launch page
    // Assumes the generated site will be hosted under a path like /site/[id]
    // The base URL should be configurable via an environment variable.
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Fallback for local development
    const siteUrl = `${baseUrl}/site/${siteId}`;

    return NextResponse.json({ message: 'Site generated successfully!', siteId, siteUrl }, { status: 200 });

  } catch (error) {
    console.error('Error generating site:', error);
    return NextResponse.json({ message: 'Internal server error.', error: error.message }, { status: 500 });
  }
}
