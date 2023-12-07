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
export type FaUserCheckProps = typeof __propDef.props;
export type FaUserCheckEvents = typeof __propDef.events;
export type FaUserCheckSlots = typeof __propDef.slots;
export default class FaUserCheck extends SvelteComponentTyped<FaUserCheckProps, FaUserCheckEvents, FaUserCheckSlots> {
}
export {};
