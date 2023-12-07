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
export type MdWebProps = typeof __propDef.props;
export type MdWebEvents = typeof __propDef.events;
export type MdWebSlots = typeof __propDef.slots;
export default class MdWeb extends SvelteComponentTyped<MdWebProps, MdWebEvents, MdWebSlots> {
}
export {};
