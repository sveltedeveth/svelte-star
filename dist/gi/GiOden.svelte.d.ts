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
export type GiOdenProps = typeof __propDef.props;
export type GiOdenEvents = typeof __propDef.events;
export type GiOdenSlots = typeof __propDef.slots;
export default class GiOden extends SvelteComponentTyped<GiOdenProps, GiOdenEvents, GiOdenSlots> {
}
export {};
