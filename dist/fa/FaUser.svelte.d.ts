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
export type FaUserProps = typeof __propDef.props;
export type FaUserEvents = typeof __propDef.events;
export type FaUserSlots = typeof __propDef.slots;
export default class FaUser extends SvelteComponentTyped<FaUserProps, FaUserEvents, FaUserSlots> {
}
export {};
