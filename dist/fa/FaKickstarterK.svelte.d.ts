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
export type FaKickstarterKProps = typeof __propDef.props;
export type FaKickstarterKEvents = typeof __propDef.events;
export type FaKickstarterKSlots = typeof __propDef.slots;
export default class FaKickstarterK extends SvelteComponentTyped<FaKickstarterKProps, FaKickstarterKEvents, FaKickstarterKSlots> {
}
export {};
