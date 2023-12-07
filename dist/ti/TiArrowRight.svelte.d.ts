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
export type TiArrowRightProps = typeof __propDef.props;
export type TiArrowRightEvents = typeof __propDef.events;
export type TiArrowRightSlots = typeof __propDef.slots;
export default class TiArrowRight extends SvelteComponentTyped<TiArrowRightProps, TiArrowRightEvents, TiArrowRightSlots> {
}
export {};
