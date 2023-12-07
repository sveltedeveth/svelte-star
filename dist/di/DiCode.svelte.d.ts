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
export type DiCodeProps = typeof __propDef.props;
export type DiCodeEvents = typeof __propDef.events;
export type DiCodeSlots = typeof __propDef.slots;
export default class DiCode extends SvelteComponentTyped<DiCodeProps, DiCodeEvents, DiCodeSlots> {
}
export {};
