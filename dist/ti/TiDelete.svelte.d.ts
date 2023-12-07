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
export type TiDeleteProps = typeof __propDef.props;
export type TiDeleteEvents = typeof __propDef.events;
export type TiDeleteSlots = typeof __propDef.slots;
export default class TiDelete extends SvelteComponentTyped<TiDeleteProps, TiDeleteEvents, TiDeleteSlots> {
}
export {};
