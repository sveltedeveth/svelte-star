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
export type GiLiarProps = typeof __propDef.props;
export type GiLiarEvents = typeof __propDef.events;
export type GiLiarSlots = typeof __propDef.slots;
export default class GiLiar extends SvelteComponentTyped<GiLiarProps, GiLiarEvents, GiLiarSlots> {
}
export {};
