// To utilize the default config system built, this file is required. It defines the *structure* of the configuration file. These structured options display as changeable UI elements within the "Config" section of the service details page in the StartOS UI.

import { compat, types as T } from "../deps.ts";

// export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({});

// https://docs.start9.com/0.3.5.x/developer-docs/specification/config-spec#string

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
    "tor-address": {
      "name": "Tor Address",
      "description": "The Tor address of the network interface",
      "type": "pointer",
      "subtype": "package",
      "package-id": "time-into-sats",
      "target": "tor-address",
      "interface": "main",
    },
    "lan-address": {
      "name": "LAN Address",
      "description": "The LAN address of the network interface",
      "type": "pointer",
      "subtype": "package",
      "package-id": "time-into-sats",
      "target": "lan-address",
      "interface": "main",
    },
    "nostr-relay": {
        "type": "string",
        "name": "Nostr Relay",
        // "default": "wss://relay.getalby.com/v1",
        "default": "wss://relay.primal.net",
        "description": "The Nostr Relay to use for Time Into Sats connections",
        "copyable": true,
        "nullable": false,    
    },
    "implementation": {
      "type": "enum",
      "name": "Lightning Implementation",
      "description": "The underlying Lightning implementation, currently LND or Core Lightning (CLN)",
      "warning": "If you change the LN implementation after using Time Into Sats this will delete all NWC connections related to the previously configured!",
      "values": ["LndNode", "ClnNode"],
      'value-names': {
        "LndNode": "LND",
        "ClnNode": "Core Lightning (coming soon)",
      },
      "default": "LndNode",
    }
  });