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
export type GiCheerfulProps = typeof __propDef.props;
export type GiCheerfulEvents = typeof __propDef.events;
export type GiCheerfulSlots = typeof __propDef.slots;
export default class GiCheerful extends SvelteComponentTyped<GiCheerfulProps, GiCheerfulEvents, GiCheerfulSlots> {
}
export {};
