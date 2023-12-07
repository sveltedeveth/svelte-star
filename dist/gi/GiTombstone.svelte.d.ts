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
export type GiTombstoneProps = typeof __propDef.props;
export type GiTombstoneEvents = typeof __propDef.events;
export type GiTombstoneSlots = typeof __propDef.slots;
export default class GiTombstone extends SvelteComponentTyped<GiTombstoneProps, GiTombstoneEvents, GiTombstoneSlots> {
}
export {};
