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
export type GiTriangleTargetProps = typeof __propDef.props;
export type GiTriangleTargetEvents = typeof __propDef.events;
export type GiTriangleTargetSlots = typeof __propDef.slots;
export default class GiTriangleTarget extends SvelteComponentTyped<GiTriangleTargetProps, GiTriangleTargetEvents, GiTriangleTargetSlots> {
}
export {};
