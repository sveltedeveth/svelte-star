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
export type DiDrupalProps = typeof __propDef.props;
export type DiDrupalEvents = typeof __propDef.events;
export type DiDrupalSlots = typeof __propDef.slots;
export default class DiDrupal extends SvelteComponentTyped<DiDrupalProps, DiDrupalEvents, DiDrupalSlots> {
}
export {};
