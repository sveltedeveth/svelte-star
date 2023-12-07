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
export type GiFireAxeProps = typeof __propDef.props;
export type GiFireAxeEvents = typeof __propDef.events;
export type GiFireAxeSlots = typeof __propDef.slots;
export default class GiFireAxe extends SvelteComponentTyped<GiFireAxeProps, GiFireAxeEvents, GiFireAxeSlots> {
}
export {};
