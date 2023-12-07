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
export type GiFlamingClawProps = typeof __propDef.props;
export type GiFlamingClawEvents = typeof __propDef.events;
export type GiFlamingClawSlots = typeof __propDef.slots;
export default class GiFlamingClaw extends SvelteComponentTyped<GiFlamingClawProps, GiFlamingClawEvents, GiFlamingClawSlots> {
}
export {};
