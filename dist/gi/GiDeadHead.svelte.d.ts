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
export type GiDeadHeadProps = typeof __propDef.props;
export type GiDeadHeadEvents = typeof __propDef.events;
export type GiDeadHeadSlots = typeof __propDef.slots;
export default class GiDeadHead extends SvelteComponentTyped<GiDeadHeadProps, GiDeadHeadEvents, GiDeadHeadSlots> {
}
export {};
