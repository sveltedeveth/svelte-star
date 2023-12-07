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
export type IoMdWifiProps = typeof __propDef.props;
export type IoMdWifiEvents = typeof __propDef.events;
export type IoMdWifiSlots = typeof __propDef.slots;
export default class IoMdWifi extends SvelteComponentTyped<IoMdWifiProps, IoMdWifiEvents, IoMdWifiSlots> {
}
export {};
