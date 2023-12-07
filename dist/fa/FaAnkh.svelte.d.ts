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
export type FaAnkhProps = typeof __propDef.props;
export type FaAnkhEvents = typeof __propDef.events;
export type FaAnkhSlots = typeof __propDef.slots;
export default class FaAnkh extends SvelteComponentTyped<FaAnkhProps, FaAnkhEvents, FaAnkhSlots> {
}
export {};
