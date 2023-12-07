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
export type MdAccessibleProps = typeof __propDef.props;
export type MdAccessibleEvents = typeof __propDef.events;
export type MdAccessibleSlots = typeof __propDef.slots;
export default class MdAccessible extends SvelteComponentTyped<MdAccessibleProps, MdAccessibleEvents, MdAccessibleSlots> {
}
export {};
