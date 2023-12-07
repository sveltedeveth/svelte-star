import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdNetworkWifiProps = typeof __propDef.props;
export type MdNetworkWifiEvents = typeof __propDef.events;
export type MdNetworkWifiSlots = typeof __propDef.slots;
export default class MdNetworkWifi extends SvelteComponentTyped<MdNetworkWifiProps, MdNetworkWifiEvents, MdNetworkWifiSlots> {
}
export {};
