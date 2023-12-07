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
export type MdDescriptionProps = typeof __propDef.props;
export type MdDescriptionEvents = typeof __propDef.events;
export type MdDescriptionSlots = typeof __propDef.slots;
export default class MdDescription extends SvelteComponentTyped<MdDescriptionProps, MdDescriptionEvents, MdDescriptionSlots> {
}
export {};
