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
export type FaBongProps = typeof __propDef.props;
export type FaBongEvents = typeof __propDef.events;
export type FaBongSlots = typeof __propDef.slots;
export default class FaBong extends SvelteComponentTyped<FaBongProps, FaBongEvents, FaBongSlots> {
}
export {};
