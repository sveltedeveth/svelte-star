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
export type MdPollProps = typeof __propDef.props;
export type MdPollEvents = typeof __propDef.events;
export type MdPollSlots = typeof __propDef.slots;
export default class MdPoll extends SvelteComponentTyped<MdPollProps, MdPollEvents, MdPollSlots> {
}
export {};
