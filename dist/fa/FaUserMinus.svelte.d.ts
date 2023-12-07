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
export type FaUserMinusProps = typeof __propDef.props;
export type FaUserMinusEvents = typeof __propDef.events;
export type FaUserMinusSlots = typeof __propDef.slots;
export default class FaUserMinus extends SvelteComponentTyped<FaUserMinusProps, FaUserMinusEvents, FaUserMinusSlots> {
}
export {};
