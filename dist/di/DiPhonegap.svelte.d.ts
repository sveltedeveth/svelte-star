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
export type DiPhonegapProps = typeof __propDef.props;
export type DiPhonegapEvents = typeof __propDef.events;
export type DiPhonegapSlots = typeof __propDef.slots;
export default class DiPhonegap extends SvelteComponentTyped<DiPhonegapProps, DiPhonegapEvents, DiPhonegapSlots> {
}
export {};
