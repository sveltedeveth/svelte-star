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
export type GiWarAxeProps = typeof __propDef.props;
export type GiWarAxeEvents = typeof __propDef.events;
export type GiWarAxeSlots = typeof __propDef.slots;
export default class GiWarAxe extends SvelteComponentTyped<GiWarAxeProps, GiWarAxeEvents, GiWarAxeSlots> {
}
export {};
