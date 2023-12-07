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
export type FaUserAltProps = typeof __propDef.props;
export type FaUserAltEvents = typeof __propDef.events;
export type FaUserAltSlots = typeof __propDef.slots;
export default class FaUserAlt extends SvelteComponentTyped<FaUserAltProps, FaUserAltEvents, FaUserAltSlots> {
}
export {};
