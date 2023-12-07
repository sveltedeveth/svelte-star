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
export type FaEyeDropperProps = typeof __propDef.props;
export type FaEyeDropperEvents = typeof __propDef.events;
export type FaEyeDropperSlots = typeof __propDef.slots;
export default class FaEyeDropper extends SvelteComponentTyped<FaEyeDropperProps, FaEyeDropperEvents, FaEyeDropperSlots> {
}
export {};
