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
export type GiPencilProps = typeof __propDef.props;
export type GiPencilEvents = typeof __propDef.events;
export type GiPencilSlots = typeof __propDef.slots;
export default class GiPencil extends SvelteComponentTyped<GiPencilProps, GiPencilEvents, GiPencilSlots> {
}
export {};
