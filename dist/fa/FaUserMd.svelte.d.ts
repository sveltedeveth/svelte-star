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
export type FaUserMdProps = typeof __propDef.props;
export type FaUserMdEvents = typeof __propDef.events;
export type FaUserMdSlots = typeof __propDef.slots;
export default class FaUserMd extends SvelteComponentTyped<FaUserMdProps, FaUserMdEvents, FaUserMdSlots> {
}
export {};
