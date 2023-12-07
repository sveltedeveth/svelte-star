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
export type MdTabProps = typeof __propDef.props;
export type MdTabEvents = typeof __propDef.events;
export type MdTabSlots = typeof __propDef.slots;
export default class MdTab extends SvelteComponentTyped<MdTabProps, MdTabEvents, MdTabSlots> {
}
export {};
