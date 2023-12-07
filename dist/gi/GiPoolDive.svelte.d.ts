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
export type GiPoolDiveProps = typeof __propDef.props;
export type GiPoolDiveEvents = typeof __propDef.events;
export type GiPoolDiveSlots = typeof __propDef.slots;
export default class GiPoolDive extends SvelteComponentTyped<GiPoolDiveProps, GiPoolDiveEvents, GiPoolDiveSlots> {
}
export {};
