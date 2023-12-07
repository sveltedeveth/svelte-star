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
export type FaUserTagProps = typeof __propDef.props;
export type FaUserTagEvents = typeof __propDef.events;
export type FaUserTagSlots = typeof __propDef.slots;
export default class FaUserTag extends SvelteComponentTyped<FaUserTagProps, FaUserTagEvents, FaUserTagSlots> {
}
export {};
