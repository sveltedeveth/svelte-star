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
export type GiHeartburnProps = typeof __propDef.props;
export type GiHeartburnEvents = typeof __propDef.events;
export type GiHeartburnSlots = typeof __propDef.slots;
export default class GiHeartburn extends SvelteComponentTyped<GiHeartburnProps, GiHeartburnEvents, GiHeartburnSlots> {
}
export {};
