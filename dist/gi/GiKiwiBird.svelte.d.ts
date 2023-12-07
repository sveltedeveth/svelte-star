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
export type GiKiwiBirdProps = typeof __propDef.props;
export type GiKiwiBirdEvents = typeof __propDef.events;
export type GiKiwiBirdSlots = typeof __propDef.slots;
export default class GiKiwiBird extends SvelteComponentTyped<GiKiwiBirdProps, GiKiwiBirdEvents, GiKiwiBirdSlots> {
}
export {};
