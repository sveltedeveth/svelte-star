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
export type TiPencilProps = typeof __propDef.props;
export type TiPencilEvents = typeof __propDef.events;
export type TiPencilSlots = typeof __propDef.slots;
export default class TiPencil extends SvelteComponentTyped<TiPencilProps, TiPencilEvents, TiPencilSlots> {
}
export {};
