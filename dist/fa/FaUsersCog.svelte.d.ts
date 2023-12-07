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
export type FaUsersCogProps = typeof __propDef.props;
export type FaUsersCogEvents = typeof __propDef.events;
export type FaUsersCogSlots = typeof __propDef.slots;
export default class FaUsersCog extends SvelteComponentTyped<FaUsersCogProps, FaUsersCogEvents, FaUsersCogSlots> {
}
export {};
