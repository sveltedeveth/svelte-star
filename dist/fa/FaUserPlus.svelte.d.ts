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
export type FaUserPlusProps = typeof __propDef.props;
export type FaUserPlusEvents = typeof __propDef.events;
export type FaUserPlusSlots = typeof __propDef.slots;
export default class FaUserPlus extends SvelteComponentTyped<FaUserPlusProps, FaUserPlusEvents, FaUserPlusSlots> {
}
export {};
