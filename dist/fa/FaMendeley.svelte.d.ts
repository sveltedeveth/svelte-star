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
export type FaMendeleyProps = typeof __propDef.props;
export type FaMendeleyEvents = typeof __propDef.events;
export type FaMendeleySlots = typeof __propDef.slots;
export default class FaMendeley extends SvelteComponentTyped<FaMendeleyProps, FaMendeleyEvents, FaMendeleySlots> {
}
export {};
