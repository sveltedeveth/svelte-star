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
export type FaUikitProps = typeof __propDef.props;
export type FaUikitEvents = typeof __propDef.events;
export type FaUikitSlots = typeof __propDef.slots;
export default class FaUikit extends SvelteComponentTyped<FaUikitProps, FaUikitEvents, FaUikitSlots> {
}
export {};
