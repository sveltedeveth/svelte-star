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
export type FaCrutchProps = typeof __propDef.props;
export type FaCrutchEvents = typeof __propDef.events;
export type FaCrutchSlots = typeof __propDef.slots;
export default class FaCrutch extends SvelteComponentTyped<FaCrutchProps, FaCrutchEvents, FaCrutchSlots> {
}
export {};
