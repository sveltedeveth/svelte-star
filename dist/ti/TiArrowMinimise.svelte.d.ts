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
export type TiArrowMinimiseProps = typeof __propDef.props;
export type TiArrowMinimiseEvents = typeof __propDef.events;
export type TiArrowMinimiseSlots = typeof __propDef.slots;
export default class TiArrowMinimise extends SvelteComponentTyped<TiArrowMinimiseProps, TiArrowMinimiseEvents, TiArrowMinimiseSlots> {
}
export {};
