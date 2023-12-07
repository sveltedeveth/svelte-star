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
export type TiArrowDownProps = typeof __propDef.props;
export type TiArrowDownEvents = typeof __propDef.events;
export type TiArrowDownSlots = typeof __propDef.slots;
export default class TiArrowDown extends SvelteComponentTyped<TiArrowDownProps, TiArrowDownEvents, TiArrowDownSlots> {
}
export {};
