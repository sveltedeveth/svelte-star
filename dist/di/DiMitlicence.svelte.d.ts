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
export type DiMitlicenceProps = typeof __propDef.props;
export type DiMitlicenceEvents = typeof __propDef.events;
export type DiMitlicenceSlots = typeof __propDef.slots;
export default class DiMitlicence extends SvelteComponentTyped<DiMitlicenceProps, DiMitlicenceEvents, DiMitlicenceSlots> {
}
export {};
