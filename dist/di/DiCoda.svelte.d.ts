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
export type DiCodaProps = typeof __propDef.props;
export type DiCodaEvents = typeof __propDef.events;
export type DiCodaSlots = typeof __propDef.slots;
export default class DiCoda extends SvelteComponentTyped<DiCodaProps, DiCodaEvents, DiCodaSlots> {
}
export {};
