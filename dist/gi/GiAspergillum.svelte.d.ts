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
export type GiAspergillumProps = typeof __propDef.props;
export type GiAspergillumEvents = typeof __propDef.events;
export type GiAspergillumSlots = typeof __propDef.slots;
export default class GiAspergillum extends SvelteComponentTyped<GiAspergillumProps, GiAspergillumEvents, GiAspergillumSlots> {
}
export {};
