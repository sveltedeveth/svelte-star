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
export type FaListUlProps = typeof __propDef.props;
export type FaListUlEvents = typeof __propDef.events;
export type FaListUlSlots = typeof __propDef.slots;
export default class FaListUl extends SvelteComponentTyped<FaListUlProps, FaListUlEvents, FaListUlSlots> {
}
export {};
