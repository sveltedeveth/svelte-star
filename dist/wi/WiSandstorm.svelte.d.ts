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
export type WiSandstormProps = typeof __propDef.props;
export type WiSandstormEvents = typeof __propDef.events;
export type WiSandstormSlots = typeof __propDef.slots;
export default class WiSandstorm extends SvelteComponentTyped<WiSandstormProps, WiSandstormEvents, WiSandstormSlots> {
}
export {};
