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
export type FaThumbtackProps = typeof __propDef.props;
export type FaThumbtackEvents = typeof __propDef.events;
export type FaThumbtackSlots = typeof __propDef.slots;
export default class FaThumbtack extends SvelteComponentTyped<FaThumbtackProps, FaThumbtackEvents, FaThumbtackSlots> {
}
export {};
