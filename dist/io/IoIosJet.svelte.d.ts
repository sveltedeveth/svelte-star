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
export type IoIosJetProps = typeof __propDef.props;
export type IoIosJetEvents = typeof __propDef.events;
export type IoIosJetSlots = typeof __propDef.slots;
export default class IoIosJet extends SvelteComponentTyped<IoIosJetProps, IoIosJetEvents, IoIosJetSlots> {
}
export {};
