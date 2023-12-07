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
export type TiArrowLoopProps = typeof __propDef.props;
export type TiArrowLoopEvents = typeof __propDef.events;
export type TiArrowLoopSlots = typeof __propDef.slots;
export default class TiArrowLoop extends SvelteComponentTyped<TiArrowLoopProps, TiArrowLoopEvents, TiArrowLoopSlots> {
}
export {};
