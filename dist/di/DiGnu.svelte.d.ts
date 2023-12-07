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
export type DiGnuProps = typeof __propDef.props;
export type DiGnuEvents = typeof __propDef.events;
export type DiGnuSlots = typeof __propDef.slots;
export default class DiGnu extends SvelteComponentTyped<DiGnuProps, DiGnuEvents, DiGnuSlots> {
}
export {};
