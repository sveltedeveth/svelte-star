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
export type DiGulpProps = typeof __propDef.props;
export type DiGulpEvents = typeof __propDef.events;
export type DiGulpSlots = typeof __propDef.slots;
export default class DiGulp extends SvelteComponentTyped<DiGulpProps, DiGulpEvents, DiGulpSlots> {
}
export {};
