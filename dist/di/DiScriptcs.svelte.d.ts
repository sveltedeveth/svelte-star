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
export type DiScriptcsProps = typeof __propDef.props;
export type DiScriptcsEvents = typeof __propDef.events;
export type DiScriptcsSlots = typeof __propDef.slots;
export default class DiScriptcs extends SvelteComponentTyped<DiScriptcsProps, DiScriptcsEvents, DiScriptcsSlots> {
}
export {};
