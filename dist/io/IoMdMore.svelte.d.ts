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
export type IoMdMoreProps = typeof __propDef.props;
export type IoMdMoreEvents = typeof __propDef.events;
export type IoMdMoreSlots = typeof __propDef.slots;
export default class IoMdMore extends SvelteComponentTyped<IoMdMoreProps, IoMdMoreEvents, IoMdMoreSlots> {
}
export {};
