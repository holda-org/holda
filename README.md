# Holda

**Holda** is a decentralized escrow platform built on the **Stellar network** that enables secure, trustless payments between buyers and sellers. Funds are held in escrow via smart contracts and released automatically once agreed conditions are met — no intermediaries, no delays, no disputes left unresolved.

Holda is powered by **Stella**, an AI assistant built into the platform to guide users through escrow creation, verification, and dispute resolution.

🌐 [holda.app](https://holda.app)

---

## Overview

Online transactions require trust between parties who may not know each other. This challenge is widespread across:

- Freelance marketplaces
- Peer-to-peer transactions
- Digital services
- E-commerce platforms
- Web3 marketplaces

Traditional escrow services depend on centralized intermediaries that introduce delayed payments, high fees, lack of transparency, platform censorship, and counterparty risk.

Holda solves these problems using the **Stellar network** — an open-source blockchain built for fast, low-cost, cross-border payments. Funds are securely locked, verified, and released automatically according to predefined rules. The result is a **trustless, transparent, and programmable payment system** for the modern internet.

---

## Why Stellar

The Stellar network offers unique advantages for escrow infrastructure:

- **Near-instant settlement** — transactions finalize in 3–5 seconds
- **Ultra-low fees** — a fraction of a cent per transaction
- **Built for payments** — Stellar was designed specifically for cross-border and remittance use cases
- **Global reach** — a worldwide network of anchors and on/off-ramps including MoneyGram
- **USDC & EURC support** — native stablecoin support for real-world payment flows
- **Open-source & non-profit** — backed by the Stellar Development Foundation (SDF)

---

## Meet Stella

**Stella** is Holda's built-in AI assistant. Stellarhelps users:

- Create and configure escrow agreements
- Understand release conditions and contract terms
- Navigate dispute resolution flows
- Monitor escrow status in plain language
- Get real-time guidance throughout every transaction

Stellarmakes the complexity of blockchain escrow accessible to everyone — no technical knowledge required.

---

## Key Features

| Feature                      | Description                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| **Decentralized Escrow**     | Funds are locked on-chain — no third party controls them                                   |
| **Conditional Payments**     | Programmable release conditions: delivery, milestones, time-locks, multi-step verification |
| **Dispute Resolution**       | Contracts enter dispute mode with resolution mechanisms; decentralized arbitration planned |
| **Multi-party Verification** | Supports buyer + seller approval, escrow agent verification, and DAO arbitration           |
| **Transparent Transactions** | All escrow activity is on-chain — fully immutable and verifiable                           |
| **AI-Assisted UX**           | Stellarguides users through every step with natural language support                       |
| **Low Fees**                 | Built on Stellar for near-zero transaction costs                                           |

---

## How It Works

```
Step 1 — Create Escrow      Buyer defines: amount, recipient, release conditions, expiry
Step 2 — Deposit Funds      Buyer locks funds in the escrow contract
Step 3 — Execution          Seller delivers the agreed product or service
Step 4 — Verification       Conditions verified by buyer, both parties, or automated logic
Step 5 — Fund Release       Contract automatically releases funds to the seller
```

---

## Use Cases

- **Freelance Payments** — Clients lock funds before work begins; payment releases on completion
- **E-commerce** — Buyers purchase goods with funds held until delivery is confirmed
- **P2P Transactions** — Reduce fraud risk for individuals trading assets online
- **Web3 Marketplaces** — NFT platforms and decentralized exchanges can integrate Holda for escrow
- **Cross-border Payments** — Leverage Stellar's global anchor network for international transactions
- **Service Marketplaces** — Milestone-based payments for long-term or consulting projects

---

## System Architecture

```
                +-----------------------+
                |       Frontend        |
                |   (Next.js / React)   |
                +----------+------------+
                           |
                     StellarAI Layer
                  (AI-assisted UX & guidance)
                           |
                           | Web3 Provider
                           |
                +----------v------------+
                |      Wallet Layer     |
                |  (Stellar Wallets /   |
                |   WalletConnect)      |
                +----------+------------+
                           |
                           | Horizon API / RPC
                           |
                +----------v------------+
                |    Stellar Network    |
                +----------+------------+
                           |
            +--------------+---------------+
            |                              |
+-----------v-----------+      +-----------v-----------+
|    Escrow Contract    |      |   Dispute Manager     |
|                       |      |                       |
| - Create Escrow       |      | - Trigger Disputes    |
| - Lock Funds          |      | - Arbitration Logic   |
| - Verify Conditions   |      | - Resolve Conflicts   |
| - Release Funds       |      |                       |
+-----------------------+      +-----------------------+
```

**Frontend Layer** — UI for creating and managing escrows with wallet connection and transaction interaction

**StellarAI Layer** — Natural language guidance and AI-assisted escrow management

**Wallet Layer** — User authentication and transaction signing via Stellar-compatible wallets

**Smart Contract Layer** — Core escrow logic, fund custody, and dispute management

**Integration Layer** — APIs and SDKs for external developers

---

## Escrow State Machine

Every Holda escrow follows a defined lifecycle:

```
    +-----------+
    |  Created  |   Escrow initialized, terms defined, no funds yet
    +-----------+
          |
          | Buyer deposits funds
          v
    +-----------+
    |  Funded   |   Funds locked in contract
    +-----------+
          |
          | Seller performs work
          v
    +-----------+
    | Completed |   Seller marks work as complete
    +-----------+
      /         \
     /           \
    v             v
+-----------+  +-----------+
| Released  |  |  Dispute  |   Buyer approves → funds sent to seller
+-----------+  +-----------+   Dispute raised → enters resolution
                    |
                    v
              +-----------+
              | Resolved  |   Arbitrator or resolution mechanism decides
              +-----------+
```

---

## Technology Stack

| Layer           | Technologies                                  |
| --------------- | --------------------------------------------- |
| Blockchain      | Stellar Network                               |
| Smart Contracts | Soroban (Stellar)                             |
| Frontend        | React, Next.js, Tailwind CSS                  |
| AI Assistant    | Stellar(built-in AI)                          |
| Web3 Libraries  | stellar-sdk, Horizon API                      |
| Backend         | Node.js, API services, Webhooks               |
| Wallet Support  | Lobstr, Ledger Live, Freighter, WalletConnect |
| Stablecoins     | USDC, EURC on Stellar                         |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/holda-app/holda
cd holda

# Install dependencies
npm install

# Run development server
npm run dev

# Compile smart contracts
npm run contracts:build

# Deploy to Stellar testnet
npm run contracts:deploy --network testnet
```

### Project Structure

```
holda/
├── contracts/
│   ├── Escrow.sol
│   └── DisputeManager.sol
├── frontend/
│   ├── components/
│   └── pages/
├── stella/
│   └── assistant.js
├── scripts/
│   └── deploy.js
├── test/
│   └── escrow.test.js
├── docs/
│   └── architecture.md
└── README.md
```

---

## Developer API

**Base URL:** `https://api.holda.app`

### Endpoints

**Create Escrow**

```
POST /escrow/create
```

```json
{
  "buyer": "stellar_address",
  "seller": "stellar_address",
  "amount": "value",
  "token": "XLM, USDC, or EURC",
  "conditions": "escrow conditions",
  "expiry": "timestamp"
}
```

Response: `{ "escrowId": "12345", "status": "created" }`

**Deposit Funds**

```
POST /escrow/deposit
```

```json
{ "escrowId": "12345", "amount": "value" }
```

**Release Funds**

```
POST /escrow/release
```

```json
{ "escrowId": "12345", "approvedBy": "buyer_stellar_address" }
```

**Raise Dispute**

```
POST /escrow/dispute
```

```json
{ "escrowId": "12345", "reason": "description" }
```

---

## JavaScript SDK

```bash
npm install holda-sdk
```

```javascript
import Holda from "holda-sdk";

const holda = new Holda({
  network: "stellar",
  horizonUrl: "https://horizon.stellar.org",
});

// Create an escrow
const escrow = await holda.createEscrow({
  buyer: buyerAddress,
  seller: sellerAddress,
  amount: "100 USDC",
  conditions: "Delivery confirmed",
});

// Release funds
await holda.releaseEscrow(escrow.id);
```

---

## Roadmap

- [x] **Phase 1** — Core escrow smart contract development
- [ ] **Phase 2** — Frontend web interface and wallet integrations
- [ ] **Phase 3** — StellarAI assistant integration
- [ ] **Phase 4** — Advanced dispute resolution system
- [ ] **Phase 5** — Developer SDK and third-party integrations
- [ ] **Phase 6** — Mainnet launch on Stellar network

---

## Security

Security is a top priority. Holda's practices include:

- Smart contract audits
- Extensive automated testing
- Open-source transparency
- Bug bounty programs
- Continuous monitoring

> Always verify escrow conditions before depositing funds.

---

## Contributing

We welcome contributions from developers, researchers, and designers.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a pull request

Please ensure all contributions follow project coding standards.

---

## Contact

| Channel  | Link                                    |
| -------- | --------------------------------------- |
| Website  | [holda.app](https://holda.app)          |
| Email    | [team@holda.app](mailto:team@holda.app) |
| Telegram | [@Holda](https://t.me/Holda)            |
