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
export type GiRustySwordProps = typeof __propDef.props;
export type GiRustySwordEvents = typeof __propDef.events;
export type GiRustySwordSlots = typeof __propDef.slots;
export default class GiRustySword extends SvelteComponentTyped<GiRustySwordProps, GiRustySwordEvents, GiRustySwordSlots> {
}
export {};
