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
export type WiDaySunnyProps = typeof __propDef.props;
export type WiDaySunnyEvents = typeof __propDef.events;
export type WiDaySunnySlots = typeof __propDef.slots;
export default class WiDaySunny extends SvelteComponentTyped<WiDaySunnyProps, WiDaySunnyEvents, WiDaySunnySlots> {
}
export {};
