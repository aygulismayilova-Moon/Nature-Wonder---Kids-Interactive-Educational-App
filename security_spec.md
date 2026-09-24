# Security Specification & Test Plan

## 1. Data Invariants
1. **User Identity Invariant**: Each document at `/users/{userId}` is strictly owned by the authenticated user where `request.auth.uid == userId`. Users cannot impersonate other users or read other users' private profiles.
2. **Subcollection Master Gate**: Subcollections `/users/{userId}/favorites/{favoriteId}` and `/users/{userId}/discoveries/{discoveryId}` are strictly locked to `request.auth.uid == userId`.
3. **Timestamp Integrity**: `createdAt` and `updatedAt` on create must equal `request.time`. On updates, `updatedAt` must equal `request.time` and `createdAt` must remain unchanged (`incoming().createdAt == existing().createdAt`).
4. **Relational Field Integrity**: `incoming().userId == request.auth.uid` and path variable `{userId} == request.auth.uid`.
5. **No Ghost Fields**: Document keys are strictly bounded to prevent injection of unverified or unexpected properties.
6. **Path Injection Guard**: All IDs must satisfy `isValidId()`.

## 2. The "Dirty Dozen" Malicious Payloads (All MUST return PERMISSION_DENIED)
1. **Payload 1 (Ghost Field Injection)**: Attempt to create a user profile with unauthorized admin field `{ userId: 'uid123', displayName: 'Kid', photoURL: '', soundGameScore: 0, totalExplorations: 0, isAdmin: true, createdAt: request.time, updatedAt: request.time }`.
2. **Payload 2 (Identity Spoofing on User)**: User with auth UID `attacker_uid` attempts to create `/users/victim_uid` with `userId: 'victim_uid'`.
3. **Payload 3 (Cross-User Favorite Injection)**: User `attacker_uid` attempts to write to `/users/victim_uid/favorites/fav1`.
4. **Payload 4 (Orphaned Write / Fake User ID in payload)**: User creates favorite in `/users/user1/favorites/fav1` where payload has `userId: 'user2'`.
5. **Payload 5 (Oversized Payload / Denial of Wallet)**: User sends `notes` containing 20,000 characters in `/users/user1/discoveries/disc1`.
6. **Payload 6 (Invalid Document ID)**: Target document ID with malicious path characters like `../../hack` or 500 characters.
7. **Payload 7 (Spoofed Client Timestamp)**: Client sends `createdAt: timestamp('2000-01-01T00:00:00Z')` instead of `request.time`.
8. **Payload 8 (Immutable Field Tampering)**: Update payload modifying `createdAt` or changing `userId`.
9. **Payload 9 (Unauthenticated Read)**: Anonymous or unauthenticated user attempts to read `/users/user1`.
10. **Payload 10 (Blanket Listing Query)**: Attacker queries `collectionGroup('discoveries')` or collection without matching `userId`.
11. **Payload 11 (Unverified Email Write)**: Attacker with unverified email attempts to create a document.
12. **Payload 12 (Invalid Enum / Malformed Data)**: User sends `itemType: 'nuclear_missile'` in a favorite record.
