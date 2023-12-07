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
export type FaSunProps = typeof __propDef.props;
export type FaSunEvents = typeof __propDef.events;
export type FaSunSlots = typeof __propDef.slots;
export default class FaSun extends SvelteComponentTyped<FaSunProps, FaSunEvents, FaSunSlots> {
}
export {};
