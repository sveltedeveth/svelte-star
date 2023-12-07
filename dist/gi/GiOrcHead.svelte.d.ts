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
export type GiOrcHeadProps = typeof __propDef.props;
export type GiOrcHeadEvents = typeof __propDef.events;
export type GiOrcHeadSlots = typeof __propDef.slots;
export default class GiOrcHead extends SvelteComponentTyped<GiOrcHeadProps, GiOrcHeadEvents, GiOrcHeadSlots> {
}
export {};
