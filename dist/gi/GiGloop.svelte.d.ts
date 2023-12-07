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
export type GiGloopProps = typeof __propDef.props;
export type GiGloopEvents = typeof __propDef.events;
export type GiGloopSlots = typeof __propDef.slots;
export default class GiGloop extends SvelteComponentTyped<GiGloopProps, GiGloopEvents, GiGloopSlots> {
}
export {};
