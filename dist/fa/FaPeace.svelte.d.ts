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
export type FaPeaceProps = typeof __propDef.props;
export type FaPeaceEvents = typeof __propDef.events;
export type FaPeaceSlots = typeof __propDef.slots;
export default class FaPeace extends SvelteComponentTyped<FaPeaceProps, FaPeaceEvents, FaPeaceSlots> {
}
export {};
