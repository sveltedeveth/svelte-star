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
export type MdSubscriptionsProps = typeof __propDef.props;
export type MdSubscriptionsEvents = typeof __propDef.events;
export type MdSubscriptionsSlots = typeof __propDef.slots;
export default class MdSubscriptions extends SvelteComponentTyped<MdSubscriptionsProps, MdSubscriptionsEvents, MdSubscriptionsSlots> {
}
export {};
