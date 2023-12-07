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
export type GiLockedBoxProps = typeof __propDef.props;
export type GiLockedBoxEvents = typeof __propDef.events;
export type GiLockedBoxSlots = typeof __propDef.slots;
export default class GiLockedBox extends SvelteComponentTyped<GiLockedBoxProps, GiLockedBoxEvents, GiLockedBoxSlots> {
}
export {};
