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
export type TiArrowRepeatProps = typeof __propDef.props;
export type TiArrowRepeatEvents = typeof __propDef.events;
export type TiArrowRepeatSlots = typeof __propDef.slots;
export default class TiArrowRepeat extends SvelteComponentTyped<TiArrowRepeatProps, TiArrowRepeatEvents, TiArrowRepeatSlots> {
}
export {};
