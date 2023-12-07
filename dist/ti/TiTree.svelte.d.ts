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
export type TiTreeProps = typeof __propDef.props;
export type TiTreeEvents = typeof __propDef.events;
export type TiTreeSlots = typeof __propDef.slots;
export default class TiTree extends SvelteComponentTyped<TiTreeProps, TiTreeEvents, TiTreeSlots> {
}
export {};
