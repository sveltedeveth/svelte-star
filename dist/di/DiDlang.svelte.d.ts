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
export type DiDlangProps = typeof __propDef.props;
export type DiDlangEvents = typeof __propDef.events;
export type DiDlangSlots = typeof __propDef.slots;
export default class DiDlang extends SvelteComponentTyped<DiDlangProps, DiDlangEvents, DiDlangSlots> {
}
export {};
