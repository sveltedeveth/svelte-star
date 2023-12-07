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
export type MdMoreProps = typeof __propDef.props;
export type MdMoreEvents = typeof __propDef.events;
export type MdMoreSlots = typeof __propDef.slots;
export default class MdMore extends SvelteComponentTyped<MdMoreProps, MdMoreEvents, MdMoreSlots> {
}
export {};
