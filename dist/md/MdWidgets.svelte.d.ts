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
export type MdWidgetsProps = typeof __propDef.props;
export type MdWidgetsEvents = typeof __propDef.events;
export type MdWidgetsSlots = typeof __propDef.slots;
export default class MdWidgets extends SvelteComponentTyped<MdWidgetsProps, MdWidgetsEvents, MdWidgetsSlots> {
}
export {};
