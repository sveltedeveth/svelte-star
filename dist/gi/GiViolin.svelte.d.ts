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
export type GiViolinProps = typeof __propDef.props;
export type GiViolinEvents = typeof __propDef.events;
export type GiViolinSlots = typeof __propDef.slots;
export default class GiViolin extends SvelteComponentTyped<GiViolinProps, GiViolinEvents, GiViolinSlots> {
}
export {};
