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
export type FaUnlinkProps = typeof __propDef.props;
export type FaUnlinkEvents = typeof __propDef.events;
export type FaUnlinkSlots = typeof __propDef.slots;
export default class FaUnlink extends SvelteComponentTyped<FaUnlinkProps, FaUnlinkEvents, FaUnlinkSlots> {
}
export {};
