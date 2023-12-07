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
export type GiArrowScopeProps = typeof __propDef.props;
export type GiArrowScopeEvents = typeof __propDef.events;
export type GiArrowScopeSlots = typeof __propDef.slots;
export default class GiArrowScope extends SvelteComponentTyped<GiArrowScopeProps, GiArrowScopeEvents, GiArrowScopeSlots> {
}
export {};
