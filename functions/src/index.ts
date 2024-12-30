/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions/v2";
import * as logger from "firebase-functions/logger";
import {defineSecret} from "firebase-functions/params";

const testSecret = defineSecret("TEST_SECRET")

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions
.https
.onRequest({ region: 'asia-northeast1', secrets: [testSecret] },
    (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!: " + testSecret.value());
});
