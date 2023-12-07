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
export type GiFoxHeadProps = typeof __propDef.props;
export type GiFoxHeadEvents = typeof __propDef.events;
export type GiFoxHeadSlots = typeof __propDef.slots;
export default class GiFoxHead extends SvelteComponentTyped<GiFoxHeadProps, GiFoxHeadEvents, GiFoxHeadSlots> {
}
export {};
