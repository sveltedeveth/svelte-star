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
export type DiVimProps = typeof __propDef.props;
export type DiVimEvents = typeof __propDef.events;
export type DiVimSlots = typeof __propDef.slots;
export default class DiVim extends SvelteComponentTyped<DiVimProps, DiVimEvents, DiVimSlots> {
}
export {};
