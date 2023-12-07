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
export type DiKomodoProps = typeof __propDef.props;
export type DiKomodoEvents = typeof __propDef.events;
export type DiKomodoSlots = typeof __propDef.slots;
export default class DiKomodo extends SvelteComponentTyped<DiKomodoProps, DiKomodoEvents, DiKomodoSlots> {
}
export {};
