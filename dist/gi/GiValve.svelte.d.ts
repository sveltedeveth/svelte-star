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
export type GiValveProps = typeof __propDef.props;
export type GiValveEvents = typeof __propDef.events;
export type GiValveSlots = typeof __propDef.slots;
export default class GiValve extends SvelteComponentTyped<GiValveProps, GiValveEvents, GiValveSlots> {
}
export {};
