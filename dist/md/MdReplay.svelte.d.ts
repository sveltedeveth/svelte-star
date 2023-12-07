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
export type MdReplayProps = typeof __propDef.props;
export type MdReplayEvents = typeof __propDef.events;
export type MdReplaySlots = typeof __propDef.slots;
export default class MdReplay extends SvelteComponentTyped<MdReplayProps, MdReplayEvents, MdReplaySlots> {
}
export {};
