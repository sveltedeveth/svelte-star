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
export type GiChiselProps = typeof __propDef.props;
export type GiChiselEvents = typeof __propDef.events;
export type GiChiselSlots = typeof __propDef.slots;
export default class GiChisel extends SvelteComponentTyped<GiChiselProps, GiChiselEvents, GiChiselSlots> {
}
export {};
