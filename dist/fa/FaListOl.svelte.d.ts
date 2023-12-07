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
export type FaListOlProps = typeof __propDef.props;
export type FaListOlEvents = typeof __propDef.events;
export type FaListOlSlots = typeof __propDef.slots;
export default class FaListOl extends SvelteComponentTyped<FaListOlProps, FaListOlEvents, FaListOlSlots> {
}
export {};
