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
export type FaHeartbeatProps = typeof __propDef.props;
export type FaHeartbeatEvents = typeof __propDef.events;
export type FaHeartbeatSlots = typeof __propDef.slots;
export default class FaHeartbeat extends SvelteComponentTyped<FaHeartbeatProps, FaHeartbeatEvents, FaHeartbeatSlots> {
}
export {};
