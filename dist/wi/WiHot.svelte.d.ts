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
export type WiHotProps = typeof __propDef.props;
export type WiHotEvents = typeof __propDef.events;
export type WiHotSlots = typeof __propDef.slots;
export default class WiHot extends SvelteComponentTyped<WiHotProps, WiHotEvents, WiHotSlots> {
}
export {};
