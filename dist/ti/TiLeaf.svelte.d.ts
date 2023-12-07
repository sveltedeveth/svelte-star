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
export type TiLeafProps = typeof __propDef.props;
export type TiLeafEvents = typeof __propDef.events;
export type TiLeafSlots = typeof __propDef.slots;
export default class TiLeaf extends SvelteComponentTyped<TiLeafProps, TiLeafEvents, TiLeafSlots> {
}
export {};
