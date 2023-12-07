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
export type GiCobraProps = typeof __propDef.props;
export type GiCobraEvents = typeof __propDef.events;
export type GiCobraSlots = typeof __propDef.slots;
export default class GiCobra extends SvelteComponentTyped<GiCobraProps, GiCobraEvents, GiCobraSlots> {
}
export {};
