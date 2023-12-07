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
export type GiDressProps = typeof __propDef.props;
export type GiDressEvents = typeof __propDef.events;
export type GiDressSlots = typeof __propDef.slots;
export default class GiDress extends SvelteComponentTyped<GiDressProps, GiDressEvents, GiDressSlots> {
}
export {};
