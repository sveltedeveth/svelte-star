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
export type GiMoaiProps = typeof __propDef.props;
export type GiMoaiEvents = typeof __propDef.events;
export type GiMoaiSlots = typeof __propDef.slots;
export default class GiMoai extends SvelteComponentTyped<GiMoaiProps, GiMoaiEvents, GiMoaiSlots> {
}
export {};
