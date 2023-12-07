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
export type IoMdJetProps = typeof __propDef.props;
export type IoMdJetEvents = typeof __propDef.events;
export type IoMdJetSlots = typeof __propDef.slots;
export default class IoMdJet extends SvelteComponentTyped<IoMdJetProps, IoMdJetEvents, IoMdJetSlots> {
}
export {};
