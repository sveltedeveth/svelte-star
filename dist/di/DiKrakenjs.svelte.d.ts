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
export type DiKrakenjsProps = typeof __propDef.props;
export type DiKrakenjsEvents = typeof __propDef.events;
export type DiKrakenjsSlots = typeof __propDef.slots;
export default class DiKrakenjs extends SvelteComponentTyped<DiKrakenjsProps, DiKrakenjsEvents, DiKrakenjsSlots> {
}
export {};
