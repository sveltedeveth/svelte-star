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
export type TiTagProps = typeof __propDef.props;
export type TiTagEvents = typeof __propDef.events;
export type TiTagSlots = typeof __propDef.slots;
export default class TiTag extends SvelteComponentTyped<TiTagProps, TiTagEvents, TiTagSlots> {
}
export {};
