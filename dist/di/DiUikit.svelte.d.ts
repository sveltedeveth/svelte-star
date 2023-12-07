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
export type DiUikitProps = typeof __propDef.props;
export type DiUikitEvents = typeof __propDef.events;
export type DiUikitSlots = typeof __propDef.slots;
export default class DiUikit extends SvelteComponentTyped<DiUikitProps, DiUikitEvents, DiUikitSlots> {
}
export {};
