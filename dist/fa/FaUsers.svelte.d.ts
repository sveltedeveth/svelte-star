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
export type FaUsersProps = typeof __propDef.props;
export type FaUsersEvents = typeof __propDef.events;
export type FaUsersSlots = typeof __propDef.slots;
export default class FaUsers extends SvelteComponentTyped<FaUsersProps, FaUsersEvents, FaUsersSlots> {
}
export {};
