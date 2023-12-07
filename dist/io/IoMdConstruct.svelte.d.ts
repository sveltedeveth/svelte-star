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
export type IoMdConstructProps = typeof __propDef.props;
export type IoMdConstructEvents = typeof __propDef.events;
export type IoMdConstructSlots = typeof __propDef.slots;
export default class IoMdConstruct extends SvelteComponentTyped<IoMdConstructProps, IoMdConstructEvents, IoMdConstructSlots> {
}
export {};
