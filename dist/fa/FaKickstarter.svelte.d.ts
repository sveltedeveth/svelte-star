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
export type FaKickstarterProps = typeof __propDef.props;
export type FaKickstarterEvents = typeof __propDef.events;
export type FaKickstarterSlots = typeof __propDef.slots;
export default class FaKickstarter extends SvelteComponentTyped<FaKickstarterProps, FaKickstarterEvents, FaKickstarterSlots> {
}
export {};
