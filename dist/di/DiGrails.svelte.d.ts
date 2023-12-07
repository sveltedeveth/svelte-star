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
export type DiGrailsProps = typeof __propDef.props;
export type DiGrailsEvents = typeof __propDef.events;
export type DiGrailsSlots = typeof __propDef.slots;
export default class DiGrails extends SvelteComponentTyped<DiGrailsProps, DiGrailsEvents, DiGrailsSlots> {
}
export {};
