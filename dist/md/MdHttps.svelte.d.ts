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
export type MdHttpsProps = typeof __propDef.props;
export type MdHttpsEvents = typeof __propDef.events;
export type MdHttpsSlots = typeof __propDef.slots;
export default class MdHttps extends SvelteComponentTyped<MdHttpsProps, MdHttpsEvents, MdHttpsSlots> {
}
export {};
