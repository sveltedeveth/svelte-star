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
export type GiDropProps = typeof __propDef.props;
export type GiDropEvents = typeof __propDef.events;
export type GiDropSlots = typeof __propDef.slots;
export default class GiDrop extends SvelteComponentTyped<GiDropProps, GiDropEvents, GiDropSlots> {
}
export {};
