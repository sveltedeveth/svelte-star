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
export type FaHeartBrokenProps = typeof __propDef.props;
export type FaHeartBrokenEvents = typeof __propDef.events;
export type FaHeartBrokenSlots = typeof __propDef.slots;
export default class FaHeartBroken extends SvelteComponentTyped<FaHeartBrokenProps, FaHeartBrokenEvents, FaHeartBrokenSlots> {
}
export {};
