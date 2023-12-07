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
export type DiCodeigniterProps = typeof __propDef.props;
export type DiCodeigniterEvents = typeof __propDef.events;
export type DiCodeigniterSlots = typeof __propDef.slots;
export default class DiCodeigniter extends SvelteComponentTyped<DiCodeigniterProps, DiCodeigniterEvents, DiCodeigniterSlots> {
}
export {};
