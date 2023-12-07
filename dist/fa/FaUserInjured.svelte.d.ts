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
export type FaUserInjuredProps = typeof __propDef.props;
export type FaUserInjuredEvents = typeof __propDef.events;
export type FaUserInjuredSlots = typeof __propDef.slots;
export default class FaUserInjured extends SvelteComponentTyped<FaUserInjuredProps, FaUserInjuredEvents, FaUserInjuredSlots> {
}
export {};
