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
export type WiCloudProps = typeof __propDef.props;
export type WiCloudEvents = typeof __propDef.events;
export type WiCloudSlots = typeof __propDef.slots;
export default class WiCloud extends SvelteComponentTyped<WiCloudProps, WiCloudEvents, WiCloudSlots> {
}
export {};
