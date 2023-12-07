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
export type MdExpandMoreProps = typeof __propDef.props;
export type MdExpandMoreEvents = typeof __propDef.events;
export type MdExpandMoreSlots = typeof __propDef.slots;
export default class MdExpandMore extends SvelteComponentTyped<MdExpandMoreProps, MdExpandMoreEvents, MdExpandMoreSlots> {
}
export {};
