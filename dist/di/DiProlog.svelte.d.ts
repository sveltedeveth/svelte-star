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
export type DiPrologProps = typeof __propDef.props;
export type DiPrologEvents = typeof __propDef.events;
export type DiPrologSlots = typeof __propDef.slots;
export default class DiProlog extends SvelteComponentTyped<DiPrologProps, DiPrologEvents, DiPrologSlots> {
}
export {};
