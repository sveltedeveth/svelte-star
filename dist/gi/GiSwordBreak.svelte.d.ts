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
export type GiSwordBreakProps = typeof __propDef.props;
export type GiSwordBreakEvents = typeof __propDef.events;
export type GiSwordBreakSlots = typeof __propDef.slots;
export default class GiSwordBreak extends SvelteComponentTyped<GiSwordBreakProps, GiSwordBreakEvents, GiSwordBreakSlots> {
}
export {};
