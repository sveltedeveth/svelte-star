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
export type FaCrosshairsProps = typeof __propDef.props;
export type FaCrosshairsEvents = typeof __propDef.events;
export type FaCrosshairsSlots = typeof __propDef.slots;
export default class FaCrosshairs extends SvelteComponentTyped<FaCrosshairsProps, FaCrosshairsEvents, FaCrosshairsSlots> {
}
export {};
