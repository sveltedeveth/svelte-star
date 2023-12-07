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
export type TiPenProps = typeof __propDef.props;
export type TiPenEvents = typeof __propDef.events;
export type TiPenSlots = typeof __propDef.slots;
export default class TiPen extends SvelteComponentTyped<TiPenProps, TiPenEvents, TiPenSlots> {
}
export {};
