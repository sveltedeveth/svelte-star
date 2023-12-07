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
export type MdStyleProps = typeof __propDef.props;
export type MdStyleEvents = typeof __propDef.events;
export type MdStyleSlots = typeof __propDef.slots;
export default class MdStyle extends SvelteComponentTyped<MdStyleProps, MdStyleEvents, MdStyleSlots> {
}
export {};
