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
export type GiSwordTieProps = typeof __propDef.props;
export type GiSwordTieEvents = typeof __propDef.events;
export type GiSwordTieSlots = typeof __propDef.slots;
export default class GiSwordTie extends SvelteComponentTyped<GiSwordTieProps, GiSwordTieEvents, GiSwordTieSlots> {
}
export {};
