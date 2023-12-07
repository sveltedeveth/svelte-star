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
export type GiHeartDropProps = typeof __propDef.props;
export type GiHeartDropEvents = typeof __propDef.events;
export type GiHeartDropSlots = typeof __propDef.slots;
export default class GiHeartDrop extends SvelteComponentTyped<GiHeartDropProps, GiHeartDropEvents, GiHeartDropSlots> {
}
export {};
