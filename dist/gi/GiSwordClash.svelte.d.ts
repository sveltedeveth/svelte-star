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
export type GiSwordClashProps = typeof __propDef.props;
export type GiSwordClashEvents = typeof __propDef.events;
export type GiSwordClashSlots = typeof __propDef.slots;
export default class GiSwordClash extends SvelteComponentTyped<GiSwordClashProps, GiSwordClashEvents, GiSwordClashSlots> {
}
export {};
