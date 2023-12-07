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
export type TiArrowForwardProps = typeof __propDef.props;
export type TiArrowForwardEvents = typeof __propDef.events;
export type TiArrowForwardSlots = typeof __propDef.slots;
export default class TiArrowForward extends SvelteComponentTyped<TiArrowForwardProps, TiArrowForwardEvents, TiArrowForwardSlots> {
}
export {};
