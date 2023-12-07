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
export type FaSubscriptProps = typeof __propDef.props;
export type FaSubscriptEvents = typeof __propDef.events;
export type FaSubscriptSlots = typeof __propDef.slots;
export default class FaSubscript extends SvelteComponentTyped<FaSubscriptProps, FaSubscriptEvents, FaSubscriptSlots> {
}
export {};
