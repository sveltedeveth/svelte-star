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
export type GiArcheryTargetProps = typeof __propDef.props;
export type GiArcheryTargetEvents = typeof __propDef.events;
export type GiArcheryTargetSlots = typeof __propDef.slots;
export default class GiArcheryTarget extends SvelteComponentTyped<GiArcheryTargetProps, GiArcheryTargetEvents, GiArcheryTargetSlots> {
}
export {};
