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
export type DiExtjsProps = typeof __propDef.props;
export type DiExtjsEvents = typeof __propDef.events;
export type DiExtjsSlots = typeof __propDef.slots;
export default class DiExtjs extends SvelteComponentTyped<DiExtjsProps, DiExtjsEvents, DiExtjsSlots> {
}
export {};
