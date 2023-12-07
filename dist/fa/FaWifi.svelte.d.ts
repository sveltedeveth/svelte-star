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
export type FaWifiProps = typeof __propDef.props;
export type FaWifiEvents = typeof __propDef.events;
export type FaWifiSlots = typeof __propDef.slots;
export default class FaWifi extends SvelteComponentTyped<FaWifiProps, FaWifiEvents, FaWifiSlots> {
}
export {};
