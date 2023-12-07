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
export type GoPencilProps = typeof __propDef.props;
export type GoPencilEvents = typeof __propDef.events;
export type GoPencilSlots = typeof __propDef.slots;
export default class GoPencil extends SvelteComponentTyped<GoPencilProps, GoPencilEvents, GoPencilSlots> {
}
export {};
