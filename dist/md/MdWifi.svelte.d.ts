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
export type MdWifiProps = typeof __propDef.props;
export type MdWifiEvents = typeof __propDef.events;
export type MdWifiSlots = typeof __propDef.slots;
export default class MdWifi extends SvelteComponentTyped<MdWifiProps, MdWifiEvents, MdWifiSlots> {
}
export {};
