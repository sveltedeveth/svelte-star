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
export type DiStackoverflowProps = typeof __propDef.props;
export type DiStackoverflowEvents = typeof __propDef.events;
export type DiStackoverflowSlots = typeof __propDef.slots;
export default class DiStackoverflow extends SvelteComponentTyped<DiStackoverflowProps, DiStackoverflowEvents, DiStackoverflowSlots> {
}
export {};
