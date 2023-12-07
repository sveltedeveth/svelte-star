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
export type GiFruitTreeProps = typeof __propDef.props;
export type GiFruitTreeEvents = typeof __propDef.events;
export type GiFruitTreeSlots = typeof __propDef.slots;
export default class GiFruitTree extends SvelteComponentTyped<GiFruitTreeProps, GiFruitTreeEvents, GiFruitTreeSlots> {
}
export {};
