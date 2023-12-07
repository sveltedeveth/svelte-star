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
export type FaEvernoteProps = typeof __propDef.props;
export type FaEvernoteEvents = typeof __propDef.events;
export type FaEvernoteSlots = typeof __propDef.slots;
export default class FaEvernote extends SvelteComponentTyped<FaEvernoteProps, FaEvernoteEvents, FaEvernoteSlots> {
}
export {};
