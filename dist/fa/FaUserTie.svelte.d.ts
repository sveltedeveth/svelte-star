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
export type FaUserTieProps = typeof __propDef.props;
export type FaUserTieEvents = typeof __propDef.events;
export type FaUserTieSlots = typeof __propDef.slots;
export default class FaUserTie extends SvelteComponentTyped<FaUserTieProps, FaUserTieEvents, FaUserTieSlots> {
}
export {};
