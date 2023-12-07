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
export type GiCowProps = typeof __propDef.props;
export type GiCowEvents = typeof __propDef.events;
export type GiCowSlots = typeof __propDef.slots;
export default class GiCow extends SvelteComponentTyped<GiCowProps, GiCowEvents, GiCowSlots> {
}
export {};
