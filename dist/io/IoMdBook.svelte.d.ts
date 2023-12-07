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
export type IoMdBookProps = typeof __propDef.props;
export type IoMdBookEvents = typeof __propDef.events;
export type IoMdBookSlots = typeof __propDef.slots;
export default class IoMdBook extends SvelteComponentTyped<IoMdBookProps, IoMdBookEvents, IoMdBookSlots> {
}
export {};
