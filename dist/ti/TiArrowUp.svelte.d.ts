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
export type TiArrowUpProps = typeof __propDef.props;
export type TiArrowUpEvents = typeof __propDef.events;
export type TiArrowUpSlots = typeof __propDef.slots;
export default class TiArrowUp extends SvelteComponentTyped<TiArrowUpProps, TiArrowUpEvents, TiArrowUpSlots> {
}
export {};
