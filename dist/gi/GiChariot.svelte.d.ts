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
export type GiChariotProps = typeof __propDef.props;
export type GiChariotEvents = typeof __propDef.events;
export type GiChariotSlots = typeof __propDef.slots;
export default class GiChariot extends SvelteComponentTyped<GiChariotProps, GiChariotEvents, GiChariotSlots> {
}
export {};
