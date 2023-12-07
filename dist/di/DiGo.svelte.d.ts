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
export type DiGoProps = typeof __propDef.props;
export type DiGoEvents = typeof __propDef.events;
export type DiGoSlots = typeof __propDef.slots;
export default class DiGo extends SvelteComponentTyped<DiGoProps, DiGoEvents, DiGoSlots> {
}
export {};
