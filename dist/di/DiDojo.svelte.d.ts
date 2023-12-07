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
export type DiDojoProps = typeof __propDef.props;
export type DiDojoEvents = typeof __propDef.events;
export type DiDojoSlots = typeof __propDef.slots;
export default class DiDojo extends SvelteComponentTyped<DiDojoProps, DiDojoEvents, DiDojoSlots> {
}
export {};
