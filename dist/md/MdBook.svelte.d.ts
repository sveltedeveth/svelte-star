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
export type MdBookProps = typeof __propDef.props;
export type MdBookEvents = typeof __propDef.events;
export type MdBookSlots = typeof __propDef.slots;
export default class MdBook extends SvelteComponentTyped<MdBookProps, MdBookEvents, MdBookSlots> {
}
export {};
