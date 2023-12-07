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
export type GiLotusProps = typeof __propDef.props;
export type GiLotusEvents = typeof __propDef.events;
export type GiLotusSlots = typeof __propDef.slots;
export default class GiLotus extends SvelteComponentTyped<GiLotusProps, GiLotusEvents, GiLotusSlots> {
}
export {};
