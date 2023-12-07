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
export type MdHttpProps = typeof __propDef.props;
export type MdHttpEvents = typeof __propDef.events;
export type MdHttpSlots = typeof __propDef.slots;
export default class MdHttp extends SvelteComponentTyped<MdHttpProps, MdHttpEvents, MdHttpSlots> {
}
export {};
