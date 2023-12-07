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
export type IoLogoPythonProps = typeof __propDef.props;
export type IoLogoPythonEvents = typeof __propDef.events;
export type IoLogoPythonSlots = typeof __propDef.slots;
export default class IoLogoPython extends SvelteComponentTyped<IoLogoPythonProps, IoLogoPythonEvents, IoLogoPythonSlots> {
}
export {};
