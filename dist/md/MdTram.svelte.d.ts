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
export type MdTramProps = typeof __propDef.props;
export type MdTramEvents = typeof __propDef.events;
export type MdTramSlots = typeof __propDef.slots;
export default class MdTram extends SvelteComponentTyped<MdTramProps, MdTramEvents, MdTramSlots> {
}
export {};
