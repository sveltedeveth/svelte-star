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
export type FaUserEditProps = typeof __propDef.props;
export type FaUserEditEvents = typeof __propDef.events;
export type FaUserEditSlots = typeof __propDef.slots;
export default class FaUserEdit extends SvelteComponentTyped<FaUserEditProps, FaUserEditEvents, FaUserEditSlots> {
}
export {};
