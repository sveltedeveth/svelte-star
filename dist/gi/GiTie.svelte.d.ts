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
export type GiTieProps = typeof __propDef.props;
export type GiTieEvents = typeof __propDef.events;
export type GiTieSlots = typeof __propDef.slots;
export default class GiTie extends SvelteComponentTyped<GiTieProps, GiTieEvents, GiTieSlots> {
}
export {};
